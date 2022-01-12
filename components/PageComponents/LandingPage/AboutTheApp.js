import { GiProgression } from 'react-icons/gi';
import { MdEditNote, MdOutlineTimer } from 'react-icons/md';

function AboutTheApp() {
  return (
    <div className="text-center mx-0 md:mx-10 py-8">
      <h2 className="text-3xl md:text-3xl lg:text-5xl text-CustomGreen font-extrabold">
        How can <span className="text-gradient">100First</span> help you?
      </h2>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8 my-16">
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center">
          <MdOutlineTimer className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">
            Track yourself by following the time spent each day and improvise
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center">
          <MdEditNote className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">
            Write about what you did during the session, along with any links
          </p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto lg:h-56 bg-white rounded-xl w-2/3 py-6 md:py-10 items-center">
          <GiProgression className="h-8 w-8 lg:h-14 lg:w-14" />
          <p className="text-center text-lg font-medium px-8">
            Observe your progress throughout the challenge
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTheApp;
