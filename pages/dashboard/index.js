import { getSession } from 'next-auth/client';
import Head from 'next/head';

function DashboardPage({ session }) {
  return (
    <div>
      <Head>
        <title>Dashboard | {}</title>
      </Head>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

//   //   if (!session) {
//   //     return {
//   //       redirect: {
//   //         destination: '/signin',
//   //         permanent: false, // if we want to permanently redirect to auth page or not ?
//   //       },
//   //     };
//   //   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

export default DashboardPage;
