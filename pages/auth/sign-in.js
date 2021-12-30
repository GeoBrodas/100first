import { getProviders, getSession, signIn } from 'next-auth/react';
import Head from 'next/head';

import { AiFillGithub } from 'react-icons/ai';

function SignInPage({ providers }) {
  return (
    <div className="grid bg-gradient-to-tl from-red-400 via-orange-600 to-blue-500 place-content-center h-screen">
      <Head>
        <title>Sign In</title>
      </Head>

      {/* <button>Sign In</button> */}
      <div className="bg-white rounded-lg shadow-lg p-3 md:p-5 w-1/2 mx-auto flex flex-col md:flex-row justify-around">
        <div className="text-center py-4 w-full md:w-1/3">
          <p className="text-lg">
            100First is a web application build to track your{' '}
            <b className="bg-gradient-to-r from-orange-600 to-violet-700 bg-clip-text text-transparent">
              #100daysofcode
            </b>{' '}
            challenge. 100First lets you document your journey through each day
            and motivating at each step. You can also share your list with your
            friends on social networks to support them in their journey towards
            learning programming languages.
          </p>
        </div>

        {/* make a line between */}
        <div className="border-b-2 hidden md:inline-flex border-[#253439] bg-[#253439] w-[1px] h-auto"></div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/3">
          <h3 className="font-semibold text-xl md:text-2xl mb-2">
            Sign-In using
          </h3>
          {Object.values(providers).map((provider) => (
            <div
              className="flex bg-[#253439] text-white px-4 py-2 rounded-md items-center space-x-2"
              key={provider.name}
            >
              <AiFillGithub className="h-5 w-5" />
              <button className="" onClick={() => signIn(provider.id)}>
                {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: { providers },
  };
}

export default SignInPage;
