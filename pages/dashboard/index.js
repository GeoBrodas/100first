import DashboardAdmin from '@/components/PageComponents/Dashboard/DashboardAdmin';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { findIfNextDay } from 'lib/time';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';

function DashboardPage({ data, lastSubmittedDataTIme }) {
  const parsedData = JSON.parse(data);
  const paresedTime = JSON.parse(lastSubmittedDataTIme);

  const currentTime = new Date(Date.now())
    .toLocaleString()
    .split(',')[0]
    .split('/')[1];

  const lastTime = paresedTime[0]?.days.at(-1).at;

  const serverTimeOfLastData = new Date(lastTime)
    .toLocaleString()
    .split(',')[0]
    .split('/')[1];

  const nextDay = findIfNextDay(currentTime, serverTimeOfLastData);
  console.log(currentTime, serverTimeOfLastData, nextDay);
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        <DashboardAdmin
          lastSubmittedDataTIme={lastSubmittedDataTIme}
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

  // const parsedServerTime = response[0]?.days.at(-1).at;

  // convert time to local time
  //const parsedLocalTime = new Date(parsedServerTime).toLocaleString();

  // get day from local time
  //const day = parsedLocalTime.split(',')[0].split('/')[0];

  // console.log(parsedLocalTime);

  const stringifiedData = JSON.stringify(response);

  client.close();

  return {
    props: {
      lastSubmittedDataTIme: JSON.stringify(response),
      session,
      data: stringifiedData,
    },
  };
}

export default DashboardPage;
