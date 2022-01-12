import ProfileComponent from '@/components/PageComponents/Profile/ProfileComponent';
import NavLanding from '@/Layouts/NavLanding';
import { connectToDb } from 'lib/mongodb';
import { ObjectId } from 'mongodb';
import Head from 'next/head';

function ProfilePage({ profileId, data }) {
  const parsedData = JSON.parse(data);

  return (
    <NavLanding>
      <Head>
        <title>Profile | {parsedData[0].username}</title>
      </Head>

      {/* Profile Component */}
      <ProfileComponent userData={parsedData[0]} />
    </NavLanding>
  );
}

export async function getServerSideProps(context) {
  const { profileId } = context.query;

  if (profileId.length !== 24) {
    return {
      notFound: true,
    };
  }

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ _id: ObjectId(profileId) })
    .toArray();

  if (response.length === 0) {
    return {
      notFound: true,
    };
  }

  const stringifyData = JSON.stringify(response);

  client.close();

  return {
    props: { profileId, data: stringifyData },
  };
}

export default ProfilePage;
