import HamMenu from '@/components/ui/HamMenu';
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

        {/* create links for sign-out -> desktop view */}
        <div className="hidden md:inline-flex space-x-2">
          <button
            className="nav-button"
            onClick={() =>
              signOut({
                callbackUrl: '/auth/sign-in',
              })
            }
          >
            Sign out
          </button>
          <a
            href="https://github.com/GeoBrodas/100first"
            target="_blank"
            rel="noreferrer"
          >
            <button className="nav-button">GitHub</button>
          </a>
          <a
            className="nav-button w-auto whitespace-nowrap"
            href="https://discord.gg/qr6mDan55G"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile view  */}
        <HamMenu />
      </div>

      {children}
    </div>
  );
}

export default DashboardLayout;
