import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdExitToApp } from 'react-icons/md';

function HamMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="absolute bg-CustomGreen border-CustomDark border-2 rounded-b-xl py-4 px-2 w-52 right-0">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() =>
                signOut({
                  callbackUrl: '/auth/sign-in',
                })
              }
              className="ham-menu"
            >
              <MdExitToApp className="text-CustomDark mr-2 h-5 w-5" /> Sign-Out
            </button>
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

export default HamMenu;
