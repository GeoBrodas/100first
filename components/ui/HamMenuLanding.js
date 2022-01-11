import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdDashboard } from 'react-icons/md';

function HamMenuLanding() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <div className="relative mt-1 md:hidden">
      <div className="text-CustomGreen items-center h-10 w-10 rounded-full">
        {!isOpen ? (
          <GiHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 mx-auto"
          />
        ) : (
          <MdClose
            onClick={() => setIsOpen(!isOpen)}
            className="h-7 w-7 mx-auto"
          />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 bg-CustomGreen border-CustomDark border-2 rounded-b-xl py-4 px-2 w-52 right-0">
          <div className="flex flex-col space-y-4">
            {session ? (
              <Link href="/dashboard" passHref>
                <button className="ham-menu">
                  <MdDashboard className="text-CustomDark mr-2 h-5 w-5" />{' '}
                  Dashboard
                </button>
              </Link>
            ) : (
              <Link href="/auth/sign-in" passHref>
                <button className="ham-menu">
                  <AiOutlineEnter className="text-CustomDark mr-2 h-5 w-5" />{' '}
                  Sign-In
                </button>
              </Link>
            )}
            <button className="">
              <a
                className="ham-menu"
                href="https://github.com/GeoBrodas/100first"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-CustomDark mr-2 h-5 w-5" /> GitHub
              </a>
            </button>
            <button className="">
              <a
                className="ham-menu"
                href="https://discord.gg/qr6mDan55G"
                target="_blank"
                rel="noreferrer"
              >
                <BsDiscord className="text-CustomDark mr-2 h-5 w-5" /> Join
                Discord
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamMenuLanding;
