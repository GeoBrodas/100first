import NavigationBar from '@/components/PageComponents/NavigationBar';
import AuthenticatedComponent from '@/components/PageComponents/Profile/AuthenticatedComponent';
import PublicComponent from '@/components/PageComponents/Profile/PublicComponent';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { useSession } from 'next-auth/react';

function ProfilePage({ profileId, data }) {
  console.log(data);
  const { data: session, status } = useSession();

  return (
    <DashboardLayout>
      <NavigationBar id={profileId} />
      <h3>Hello {profileId}</h3>

      {session ? <AuthenticatedComponent /> : <PublicComponent />}
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const { profileId } = context.query;

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ _id: profileId })
    .toArray();

  const stringifyData = JSON.stringify(response);
  console.log(stringifyData);

  client.close();

  return {
    props: { profileId, data: stringifyData },
  };
}

export default ProfilePage;
