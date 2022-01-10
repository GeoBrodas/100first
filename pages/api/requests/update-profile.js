import { connectToDb } from 'lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    //  protect the API routes from unauthenticated users
    if (req.query.API_ROUTE_KEY !== process.env.NEXT_PUBLIC_API_ROUTE_KEY) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // extract data from request body
    const {
      username,
      bio,
      githubUsername,
      twitterUsername,
      portfolio,
      imageUrl,
      email,
    } = req.body;

    if (!username || !bio || !githubUsername) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!imageUrl) {
      return res.status(400).json({
        message:
          'Missing required fields, this may not be your problem, please contact the developer',
      });
    }

    // console.log(req.body);

    const client = await connectToDb();

    const db = client.db();

    // find user in db
    const userData = await db
      .collection('user_data')
      .find({ email: email })
      .toArray();

    if (userData.length === 0) {
      // insert user into db
      await db.collection('user_data').insertOne({
        username,
        bio,
        githubUsername,
        twitterUsername,
        portfolio,
        imageUrl,
        email,
        days: [],
      });
    } else {
      // update user in db
      await db.collection('user_data').updateOne(
        { email: email },
        {
          $set: {
            username,
            bio,
            githubUsername,
            twitterUsername,
            portfolio,
            imageUrl,
          },
        }
      );
    }

    res.status(200).json({
      message: 'Success',
    });
  }
}

export default handler;
