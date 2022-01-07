import DashboardAdmin from '@/components/PageComponents/Dashboard/DashboardAdmin';
import NavigationBar from '@/components/PageComponents/NavigationBar';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { findIfNextDay } from 'lib/time';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';

function DashboardPage({ data }) {
  const parsedData = JSON.parse(data);

  const currentTime = new Date(Date.now())
    .toLocaleString()
    .split(',')[0]
    .split('/')[1];

  const lastTime = parsedData[0]?.days.at(-1).at;

  const serverTimeOfLastData = new Date(lastTime)
    .toLocaleString()
    .split(',')[0]
    .split('/')[1];

  const nextDay = findIfNextDay(currentTime, serverTimeOfLastData);
  console.log(currentTime, serverTimeOfLastData, nextDay);
  const { data: session, status } = useSession();

  const userId = parsedData[0]?._id;

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        <NavigationBar id={userId} />
        <DashboardAdmin
          serverTimeOfLastData={serverTimeOfLastData}
          nextDay={nextDay}
          email={session?.user.email}
          data={parsedData}
        />
      </DashboardLayout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  const client = await connectToDb();

  const db = client.db();

  const response = await db
    .collection('user_data')
    .find({ email: session.user.email })
    .toArray();

  if (!session && response[0].email !== session.user.email) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  const stringifiedData = JSON.stringify(response);

  client.close();

  return {
    props: {
      data: stringifiedData,
      session,
    },
  };
}

export default DashboardPage;
