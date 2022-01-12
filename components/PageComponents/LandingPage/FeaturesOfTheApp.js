import { VscGithubInverted } from 'react-icons/vsc';
import { SiPwa } from 'react-icons/si';
import { FiShare2 } from 'react-icons/fi';

function FeaturesOfTheApp() {
  return (
    <div className="text-center mb-20 mx-0 md:mx-10 py-8">
      <h2 className="text-3xl md:text-3xl lg:text-5xl text-CustomGreen font-extrabold">
        Features
      </h2>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8 my-16">
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center md:w-2/3">
          <VscGithubInverted className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">
            We are <b>Open source</b>! See how 100First works behind the scenes
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center md:w-2/3">
          <SiPwa className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">Coming soon...</p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center md:w-2/3">
          <FiShare2 className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">
            Generate a profile as proof of participation in the challenge
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesOfTheApp;
