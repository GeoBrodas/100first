import { getGreetingBasedOnTime } from '@/helpers/time';
import { signOut, useSession } from 'next-auth/react';

function DashboardLayout({ children }) {
  const greeting = getGreetingBasedOnTime();
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      {/* User naviagtion bar */}
      <div className="flex justify-between px-6 py-4">
        <p className="text-gradient text-2xl font-bold">
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
      {children}
    </div>
  );
}

export default DashboardLayout;
