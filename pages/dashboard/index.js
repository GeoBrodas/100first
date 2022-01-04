import DashboardAdmin from '@/components/PageComponents/Dashboard/DashboardAdmin';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

function DashboardPage({ data }) {
  const parsedData = JSON.parse(data);

  console.log(parsedData);
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        <DashboardAdmin data={parsedData} />
      </DashboardLayout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ email: session.user.email })
    .toArray();

  const stringifiedData = JSON.stringify(response);
  // console.log(stringifiedData);

  client.close();

  return {
    props: {
      session,
      data: stringifiedData,
    },
  };
}

export default DashboardPage;
