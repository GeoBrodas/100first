import { connectToDb } from 'lib/mongodb';

async function handler(req, res) {
  // res.send('Hello World');

  if (req.method === 'POST') {
    // protect API routes from unauthenticated users
    if (req.query.API_ROUTE_KEY !== process.env.NEXT_PUBLIC_API_ROUTE_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { day, day_report, project_link, email } = req.body;

    // if no day or day_report provided, return error
    if (!day || !day_report || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log(day, day_report, project_link, email);

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
      response = await db.collection('user_data').insertOne({
        email,
        days: [
          {
            day,
            day_report,
            project_link,
          },
        ],
      });
    } else {
      response = await db.collection('user_data').updateOne(
        { email },
        {
          $push: {
            days: {
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
