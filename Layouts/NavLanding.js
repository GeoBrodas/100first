import HamMenuLanding from '@/components/ui/HamMenuLanding';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { AiFillGithub, AiOutlineEnter } from 'react-icons/ai';
import { BsDiscord, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdDashboard, MdEmail, MdOutlineWork } from 'react-icons/md';

function NavLanding({ children }) {
  const { data: session, status } = useSession();

  return (
    <Fragment>
      <div className="w-full px-10 md:px-16">
        <div className="flex pt-10 flex-row justify-between">
          {/* Logo :: Sign-In : GitHub */}

          <Link href="/" passHref>
            <div className="md:hover:scale-105 hover:cursor-pointer transition duration-100 ease-in-out">
              <Image
                src="/Logo/logo-2.png"
                alt="logo"
                layout="fixed"
                width="150px"
                height="45px"
              />
            </div>
          </Link>

          {/* Sign-In and GitHub  (medium and up) */}
          <div className="hidden md:inline-flex space-x-2 md:space-x-6 items-center w-auto">
            {/* render only if not authenticated */}
            {!session ? (
              <button className="text-[#253439] text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 md:h-10 w-auto">
                <Link href="/auth/sign-in">
                  <a className="flex items-center whitespace-nowrap">
                    <AiOutlineEnter className="text-CustomDark mr-2 w-5 h-5" />
                    Sign-In
                  </a>
                </Link>
              </button>
            ) : (
              <button className="text-[#253439] text-sm flex items-center md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-20 md:h-10 md:w-auto">
                <MdDashboard className="text-CustomDark mr-2 w-5 h-5" />
                <Link href="/dashboard">Dashboard</Link>
              </button>
            )}

            {/* GitHub link */}
            <button className="text-[#253439] flex items-center text-sm md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-auto md:h-15 md:w-auto">
              <a
                href="https://github.com/GeoBrodas/100first"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center space-x-2">
                  <AiFillGithub className="h-5 w-5" />
                  <p className="whitespace-nowrap">Source code</p>
                </div>
              </a>
            </button>

            <a
              className="text-[#253439] text-sm flex items-center md:text-base font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-9 w-15 md:h-15 md:w-auto"
              href="https://discord.gg/qr6mDan55G"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord className="text-CustomDark mr-2 w-5 h-5" />
              Join Discord
            </a>
          </div>

          {/* Mobile menu */}
          <HamMenuLanding />
        </div>
        {children}

        {/* Footer */}
      </div>
      <footer className="flex px-10 py-6 justify-between bg-CustomGreen mt-4">
        <div className="flex flex-col">
          <p className="text-CustomDark text-base font-normal">
            © {new Date().getFullYear()} 100First
          </p>
          <p className="text-CustomDark text-base font-medium">
            Built by Georgey V B
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/GeoBrodas"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-CustomDark mr-2 w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/BrodasGeo"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="text-CustomDark mr-2 w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/georgeyvb/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-CustomDark mr-2 w-5 h-5" />
          </a>
          {/* <a
            href="mailto:geobro2310@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className="text-CustomDark mr-2 w-5 h-5" />
          </a>
          <a href="https://georgey.codes" target="_blank" rel="noreferrer">
            <MdOutlineWork className="text-CustomDark mr-2 w-5 h-5" />
          </a> */}
        </div>
      </footer>
    </Fragment>
  );
}

export default NavLanding;
