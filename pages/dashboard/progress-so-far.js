import NavigationBar from '@/components/PageComponents/NavigationBar';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { connectToDb } from 'lib/mongodb';
import { formatTime } from 'lib/time';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Fade } from 'react-awesome-reveal';
import Confetti from 'react-confetti';
import { useTimeout, useWindowSize } from 'react-use';

import { GiPartyPopper } from 'react-icons/gi';

function ProgressPage({ data }) {
  const parsedData = JSON.parse(data);
  const { width, height } = useWindowSize();
  const [delay] = useTimeout(4000);

  if (parsedData.length === 0 || parsedData[0].days.length === 0) {
    return (
      <DashboardLayout>
        <Head>
          <title>Progress so far</title>
        </Head>
        <NavigationBar />
        <p className="mx-auto text-CustomDark text-xl font-medium w-2/3 bg-CustomGreen mt-20 rounded-xl p-6 text-center">
          Looks like you didnt start the challenge yet! Make your first
          submission today to see your progress.
        </p>
      </DashboardLayout>
    );
  }

  const days = parsedData[0].days;
  const userId = parsedData[0]._id;

  let no = 100;

  const isComplete = () => {
    if (days.length === 100) {
      return true;
    } else return false;
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Progress so far</title>
      </Head>

      <NavigationBar />

      {isComplete() && (
        <Confetti width={width - 50} height={height} recycle={!delay()} />
      )}

      <div className="my-6 items-center">
        {isComplete() ? (
          <div className="bg-gradient-to-r my-10 from-blue-400 via-purple-500 to-red-300 flex items-center w-fit h-20 mx-auto rounded-md">
            <p className="mx-8 text-center text-2xl md:text-4xl whitespace-nowrap h-auto text-slate-100 font-bold flex">
              #100daysofcode complete!{' '}
              <GiPartyPopper className="text-white h-auto w-auto ml-2" />
            </p>
          </div>
        ) : (
          <p className="w-2/3 my-4 mx-auto text-CustomGreen text-center font-bold h-20 text-4xl">
            Progress till now
          </p>
        )}

        {/* map through days */}
        <Fade cascade delay={1000} triggerOnce>
          {days.reverse().map((day, index) => {
            let links = day.project_link.split(',');

            return (
              <div
                key={index}
                className="flex flex-col rounded-md bg-CustomGreen w-11/12 md:w-1/3 py-6 mx-auto mb-6 px-6 justify-center"
              >
                <div className="">
                  <p className="text-2xl text-right font-bold">Day {day.day}</p>
                  <p className="text-xl text-right font-normal">
                    Time spent {formatTime(day.time)}
                  </p>
                  <p className="text-lg mt-4 font-normal">{day.day_report}</p>
                  {links[0] !== '' ? (
                    <div className="flex flex-col bg-white text-CustomDark px-4 py-2 my-2 rounded-md">
                      <p className="text-xl font-semibold">
                        Deployed projects ????
                      </p>
                      {links.map((link, index) => (
                        <a
                          className="text-CustomDark underline hover:text-gray-500"
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xl font-normal bg-white rounded-md px-4 py-2 mt-2">
                      No projects deployed
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
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

  const data = await db
    .collection('user_data')
    .find({ email: session.user.email })
    .toArray();

  // if (data[0].email !== session.user.email) {
  //   return {
  //     redirect: {
  //       destination: '/dashboard',
  //       permanent: false,
  //     },
  //   };
  // }

  const stringifiedData = JSON.stringify(data);

  client.close();

  return {
    props: {
      data: stringifiedData,
    },
  };
}

export default ProgressPage;
