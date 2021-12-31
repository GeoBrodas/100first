import { MongoClient } from 'mongodb';

// env variables
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.ro6kv.mongodb.net/${database}?retryWrites=true&w=majority`;

// get mongo client
export async function connectToDb() {
  const client = new MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
}
