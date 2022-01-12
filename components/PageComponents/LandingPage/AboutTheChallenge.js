import Image from 'next/image';

function AboutTheChallenge() {
  return (
    <div className="text-center md:text-left my-28 mx-0 md:mx-10">
      <h2 className="text-3xl text-center md:text-3xl lg:text-5xl text-CustomGreen font-extrabold">
        What is #100daysofcode challenge?
      </h2>

      <div className="flex flex-col items-center md:flex-row justify-evenly my-10 md:my-16">
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl lg:text-2xl text-white font-light my-6">
            The #100daysofcode challenge is a series of coding challenges that
            are designed to help you learn to code. The challenge will enable
            you to put forward a consistent routine and will help you make that
            almighty leap into the coding world.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white font-light my-6">
            What you learn each day is entirely dependent on the path you have
            chosen, be it web development, mobile development, or data science.
            The challenge is designed to help you learn to code and become a
            better developer.
          </p>
        </div>

        <div className="w-3/4 h-72 my-4 md:my-0 mx-auto md:w-1/3 rounded-xl bg-white grid items-center">
          <Image
            className=""
            src="/svg/devfocus.svg"
            alt="devfocus"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutTheChallenge;
