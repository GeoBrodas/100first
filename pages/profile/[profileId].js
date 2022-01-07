import NavigationBar from '@/components/PageComponents/NavigationBar';
import AuthenticatedComponent from '@/components/PageComponents/Profile/AuthenticatedComponent';
import PublicComponent from '@/components/PageComponents/Profile/PublicComponent';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { ObjectId } from 'mongodb';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { AiOutlineLoading } from 'react-icons/ai';

function ProfilePage({ profileId, data }) {
  const { data: session, status } = useSession();
  const parsedData = JSON.parse(data);

  const { days, email, _id } = parsedData[0];

  return (
    <DashboardLayout>
      <Head>
        <title>Profile | {session?.user.name}</title>
      </Head>

      <NavigationBar id={profileId} />
      <h3>Hello {profileId}</h3>

      {status === 'loading' ? (
        <AiOutlineLoading className="animate-spin text-white" />
      ) : session ? (
        <AuthenticatedComponent />
      ) : (
        <PublicComponent />
      )}
    </DashboardLayout>
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

  const stringifyData = JSON.stringify(response);

  client.close();

  return {
    props: { profileId, data: stringifyData },
  };
}

export default ProfilePage;
