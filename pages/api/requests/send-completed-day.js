import { connectToDb } from '@/lib/mongodb';

async function handler(req, res) {
  res.send('Hello World');

  //   const {day, day_report, project_link} = req.body;

  //   const client = await connectToDb();
}

export default handler;
