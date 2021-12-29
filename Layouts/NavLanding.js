import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

function NavLanding({ children }) {
  return (
    <div className="px-10">
      <div className="flex flex-row justify-between">
        {/* Logo :: Sign-In : GitHub */}
        <div className="md:hover:scale-105 transition duration-100 ease-in-out">
          <Image
            src="/Logo/100FIRST.png"
            alt="logo"
            layout="fixed"
            width="200px"
            height="180px"
          />
        </div>

        {/* Sign-In and GitHub */}
        <div className="flex space-x-4 items-center w-auto">
          <button className="text-[#253439] font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-10 w-20">
            <Link href="/auth/sign-in">Sign-In</Link>
          </button>
          <button className="text-[#253439] font-medium md:hover:scale-105 transition duration-75 ease-in-out p-2 rounded-md bg-[#c9e265] h-15 w-24">
            <div className="flex items-center space-x-2">
              <AiFillGithub className="h-5 w-5" />
              <p>GitHub</p>
            </div>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default NavLanding;
