import { connectToDb } from 'lib/mongodb';
import { Timestamp } from 'mongodb';

async function handler(req, res) {
  // res.send('Hello World');

  if (req.method === 'POST') {
    // protect API routes from unauthenticated users
    if (req.query.API_ROUTE_KEY !== process.env.NEXT_PUBLIC_API_ROUTE_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const serverTime = new Date(Date.now())
      .toLocaleString()
      .split(',')[0]
      .split('/')[0];

    const { day, day_report, project_link, email, time, clientLocalTime } =
      req.body;

    // if no day or day_report provided, return error
    if (!day || !day_report || !email || !time || !clientLocalTime) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // check if clientTime is true or false ie: if its next day or not, return error
    if (clientLocalTime === serverTime) {
      // error: next submission can be done only tomorrow
      return res.status(400).json({ message: 'You can only submit tomorrow' });
    }

    // console.log(day, day_report, project_link, email);

    const client = await connectToDb();

    const db = client.db();

    const userData = await db
      .collection('user_data')
      .find({ email: email })
      .toArray();
    // console.log(userData);

    // res.send('success');

    let response;

    if (userData.length === 0) {
      // add the timestamp to the document as well using $currentDate
      response = await db.collection('user_data').insertOne({
        email,
        days: [
          {
            at: Date.now(),
            day,
            day_report,
            project_link,
            time,
          },
        ],
      });
    } else {
      response = await db.collection('user_data').updateOne(
        { email },
        {
          $push: {
            days: {
              at: Date.now(),
              duration: time,
              day,
              day_report,
              project_link,
            },
          },
        }
      );
    }

    client.close();

    return res.status(200).json({ message: 'OK', response });
  }
}

export default handler;
