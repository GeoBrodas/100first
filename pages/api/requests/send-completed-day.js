import { connectToDb } from 'lib/mongodb';

async function handler(req, res) {
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
    if (!day || !day_report || !email || !time) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await connectToDb();

    const db = client.db();

    const userData = await db
      .collection('user_data')
      .find({ email: email })
      .toArray();

    let response;

    // if user has not submitted their first submission, consider it their first and proceed
    if (userData.length === 0) {
      response = await db.collection('user_data').insertOne({
        email,
        days: [
          {
            day,
            day_report,
            project_link,
            time,
            at: Date.now(),
          },
        ],
      });

      return res.status(200).json({ message: 'Successfully submitted data' });
    }

    // check if clientTime is true or false ie: if its next day or not, return error
    if (clientLocalTime === serverTime) {
      // error: next submission can be done only tomorrow
      return res.status(400).json({ message: 'You can only submit tomorrow' });
    }

    // if array is empty -> then check if user exists in db -> if exists then updateOne else insertOne

    response = await db.collection('user_data').updateOne(
      { email },
      {
        $push: {
          days: {
            at: Date.now(),
            time: time,
            day,
            day_report,
            project_link,
          },
        },
      }
    );

    client.close();

    return res.status(200).json({ message: 'OK', response });
  }
}

export default handler;
