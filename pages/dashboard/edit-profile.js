import MainEditingArea from '@/components/PageComponents/EditingArea/MainEditingArea';
import NavigationBar from '@/components/PageComponents/NavigationBar';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { AiOutlineLoading } from 'react-icons/ai';

function EditProfilePage({ user }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="mx-auto grid place-content-center h-screen my-10">
        <Head>
          <title>Edit Profile</title>
        </Head>
        <AiOutlineLoading className="text-white h-14 w-14 animate-spin" />
      </div>
    );
  }

  const parsedData = JSON.parse(user);
  const userData = parsedData[0];

  return (
    <DashboardLayout>
      <NavigationBar />
      <Head>
        <title>Edit Profile</title>
      </Head>

      {/* Editing area */}
      <MainEditingArea sessionData={session} prevUserData={userData} />
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    };
  }

  const client = await connectToDb();

  const db = client.db();

  const user = await db
    .collection('user_data')
    .find({ email: session.user.email })
    .toArray();

  const stringifiedData = JSON.stringify(user);

  return {
    props: {
      user: stringifiedData,
    },
  };
}

export default EditProfilePage;
