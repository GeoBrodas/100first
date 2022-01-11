import NavLanding from '@/Layouts/NavLanding';
import { connectToDb } from 'lib/mongodb';
import { ObjectId } from 'mongodb';
import Head from 'next/head';

function ProfilePage({ profileId, data }) {
  const parsedData = JSON.parse(data);

  console.log(parsedData);

  return (
    <NavLanding>
      <Head>
        <title>Profile | {session?.user.name}</title>
      </Head>
      <h3>Hello {profileId}</h3>
    </NavLanding>
  );
}

export async function getServerSideProps(context) {
  const { profileId } = context.query;

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ _id: ObjectId(profileId) })
    .toArray();

  if (response.length === 0) {
    return {
      fallback: true,
    };
  }

  const stringifyData = JSON.stringify(response);

  client.close();

  return {
    props: { profileId, data: stringifyData },
  };
}

export default ProfilePage;
