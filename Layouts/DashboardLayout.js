import { getGreetingBasedOnTime } from '@/helpers/time';
import { signOut, useSession } from 'next-auth/react';

function DashboardLayout({ children }) {
  const greeting = getGreetingBasedOnTime();
  const { data: session, status } = useSession();

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
          <button
            className="nav-button"
            onClick={() =>
              signOut({
                callbackUrl: '/',
              })
            }
          >
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
