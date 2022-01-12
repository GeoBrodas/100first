import Link from 'next/link';
import { HiLightningBolt } from 'react-icons/hi';

function GetStarted() {
  return (
    <div className="flex flex-col md:flex-row mb-20 items-center justify-evenly md:space-x-4 space-y-6 md:space-y-0 md:mx-10 py-8">
      <div className="md:space-y-4 lg:space-y-8">
        <h2 className="text-3xl flex items-center justify-center md:justify-start md:text-3xl lg:text-5xl text-CustomGreen font-extrabold">
          Get Started <HiLightningBolt className="ml-4" />
        </h2>
        <p className="text-white text-center md:text-left md:text-xl lg:text-3xl font-medium">
          Sign up for an account and start tracking your progress!
        </p>
      </div>

      <button className="md:hover-animation-btn bg-CustomGreen px-4 py-2 md:px-6 md:py-4 rounded-xl text-base md:text-xl lg:text-2xl font-bold">
        <Link href="/auth/sign-in">Sign Up!</Link>
      </button>
    </div>
  );
}

export default GetStarted;
