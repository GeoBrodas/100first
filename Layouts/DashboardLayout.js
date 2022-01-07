import { getGreetingBasedOnTime } from '@/helpers/time';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function DashboardLayout({ children, ...props }) {
  const router = useRouter();
  console.log(props.id);

  const greeting = getGreetingBasedOnTime();
  const { data: session, status } = useSession();
  // console.log(session);

  return (
    <div className="px-6">
      {/* User naviagtion bar */}
      <div className="flex justify-between py-4">
        <p className="text-gradient text-xl md:text-3xl font-bold">
          {greeting}{' '}
          <span className="text-white">{session && session.user.name} !</span>
        </p>

        {/* create links for sign-out */}
        <div className="flex space-x-2">
          <button className="nav-button" onClick={signOut}>
            Sign out
          </button>
          <button className="nav-button">GitHub</button>
        </div>
      </div>

      {/* navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
          onClick={() => router.push('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
          onClick={() => router.push('/dashboard/progress-so-far')}
        >
          Progress
        </button>
        <button
          className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
          onClick={() => router.push(`/profile/${id}`)}
        >
          Profile
        </button>
      </div>

      {children}
    </div>
  );
}

export default DashboardLayout;
