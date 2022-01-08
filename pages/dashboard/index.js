import DashboardAdmin from '@/components/PageComponents/Dashboard/DashboardAdmin';
import NavigationBar from '@/components/PageComponents/NavigationBar';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { findIfNextDay } from 'lib/time';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { AiOutlineLoading } from 'react-icons/ai';

function DashboardPage({ data }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="mx-auto grid place-content-center my-10">
        <Head>
          <title>Dashboard</title>
        </Head>
        <AiOutlineLoading className="text-white h-14 w-14" />
      </div>
    );
  }

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
  // console.log(currentTime, serverTimeOfLastData, nextDay);

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
        permanent: false,
      },
    };
  }

  const stringifiedData = JSON.stringify(response);

  client.close();

  return {
    props: {
      data: stringifiedData,
    },
  };
}

export default DashboardPage;
