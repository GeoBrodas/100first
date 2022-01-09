import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

function NavLanding({ children }) {
  const { data: session, status } = useSession();

  return (
    <div className="w-full px-3 md:px-10">
      <div className="flex pt-10 flex-row justify-between">
        {/* Logo :: Sign-In : GitHub */}

        <div className="md:hover:scale-105 transition duration-100 ease-in-out">
          <Image
            src="/Logo/logo-2.png"
            alt="logo"
            layout="fixed"
            width="150px"
            height="45px"
          />
        </div>

        {/* Sign-In and GitHub  (medium and up) */}
        <div className="hidden md:inline-flex space-x-2 md:space-x-6 items-center w-auto">
          {/* render only if not authenticated */}
          {!session ? (
            <button className="text-[#253439] text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-15 md:h-10 md:w-20">
              <Link href="/auth/sign-in">Sign-In</Link>
            </button>
          ) : (
            <button className="text-[#253439] text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-20 md:h-10 md:w-auto">
              <Link href="/dashboard">Dashboard</Link>
            </button>
          )}

          {/* GitHub link */}
          <button className="text-[#253439] text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-15 md:h-15 md:w-24">
            <a
              href="https://github.com/GeoBrodas/100first"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center space-x-2">
                <AiFillGithub className="h-5 w-5" />
                <p>GitHub</p>
              </div>
            </a>
          </button>

          <a
            className="text-[#253439] text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-15 md:h-15 md:w-auto"
            href="https://discord.gg/qr6mDan55G"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}

export default NavLanding;
