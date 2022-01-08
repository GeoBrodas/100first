import Link from 'next/link';
import { AiFillGithub, AiFillTrophy } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

function ChallengeCompleted({ profileId }) {
  return (
    <div className="flex flex-col w-full md:w-2/3 mx-auto rounded-lg bg-gradient-to-r from-pink-300 via-pink-400 my-20 p-10 to-red-200">
      <p className="text-xl md:text-2xl font-extrabold mx-auto text-white">
        You have succesfully completed the #100daysofcode challenge!
      </p>

      <div className="w-auto mx-auto mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-lg font-normal text-white">
        <Link href={`/profile/${profileId}`}>
          <a className="bg-white text-center hover-animation-btn text-CustomDark font-semibold p-2 rounded-md ">
            Check out profile
          </a>
        </Link>
        <a
          className="bg-white text-center flex justify-center items-center hover-animation-btn text-CustomDark font-semibold p-2 rounded-md "
          href="https://github.com/GeoBrodas/100first"
          target="_blank"
          rel="noreferrer"
        >
          Source code <AiFillGithub className="h-6 w-6 ml-2" />
        </a>
        <a
          className="bg-white text-center hover-animation-btn text-CustomDark font-semibold p-2 rounded-md "
          href="https://twitter.com/BrodasGeo"
          target="_blank"
          rel="noreferrer"
        >
          Meet the developer!
        </a>
        <Link href="/leaderboard">
          <a className="bg-white flex justify-center items-center text-center hover-animation-btn text-CustomDark font-semibold p-2 rounded-md ">
            Leaderboard <AiFillTrophy className="h-6 w-6 ml-2" />
          </a>
        </Link>
        <a
          className="bg-white flex justify-center items-center text-center hover-animation-btn text-CustomDark font-semibold p-2 rounded-md "
          href="https://discord.gg/zqCnbF8eeQ"
          target="_blank"
          rel="noreferrer"
        >
          Join Discord <BsDiscord className="h-6 w-6 ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ChallengeCompleted;
