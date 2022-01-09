import MainEditingArea from '@/components/PageComponents/EditingArea/MainEditingArea';
import NavigationBar from '@/components/PageComponents/NavigationBar';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { AiOutlineLoading } from 'react-icons/ai';

function EditProfilePage() {
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

  return (
    <DashboardLayout>
      <NavigationBar />
      <Head>
        <title>Edit Profile</title>
      </Head>

      {/* Editing area */}
      <MainEditingArea sessionData={session} />
    </DashboardLayout>
  );
}

async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    };
  }
}

export default EditProfilePage;
