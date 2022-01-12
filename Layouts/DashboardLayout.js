import HamMenu from '@/components/ui/HamMenu';
import { getGreetingBasedOnTime } from '@/helpers/time';
import { signOut, useSession } from 'next-auth/react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { MdExitToApp } from 'react-icons/md';

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
            className="nav-button flex items-center whitespace-nowrap w-auto"
            onClick={() =>
              signOut({
                callbackUrl: '/auth/sign-in',
              })
            }
          >
            <MdExitToApp className="text-CustomDark mr-2 w-5 h-5" />
            Sign out
          </button>
          <a
            href="https://github.com/GeoBrodas/100first"
            target="_blank"
            rel="noreferrer"
          >
            <button className="nav-button flex items-center whitespace-nowrap w-auto">
              <BsGithub className="text-CustomDark mr-2 w-5 h-5" />
              GitHub
            </button>
          </a>
          <a
            className="nav-button w-auto whitespace-nowrap flex items-center"
            href="https://discord.gg/qr6mDan55G"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord className="text-CustomDark mr-2 w-5 h-5" />
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
