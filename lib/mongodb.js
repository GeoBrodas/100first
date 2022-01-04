import { MongoClient } from 'mongodb';

// env variables
const username = process.env.NEXT_PUBLIC_MONGODB_USERNAME;
const password = process.env.NEXT_PUBLIC_MONGODB_PASSWORD;
const cluster = process.env.NEXT_PUBLIC_MONGODB_CLUSTER;
const database = process.env.NEXT_PUBLIC_MONGODB_DATABASE;

const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.ro6kv.mongodb.net/${database}?retryWrites=true&w=majority`;

// get mongo client
export async function connectToDb() {
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client;
}

// get mongodb server timestamp from objectId
export function getMongoDbTimestamp(objectId) {
  const timestamp = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);

  return timestamp;
}
