import NavLanding from '@/Layouts/NavLanding';
import Image from 'next/image';

function LandingPage() {
  return (
    <NavLanding>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center md:space-x-2 my-10">
        <div className="flex md:px-2 w-3/4 md:w-2/3 mx-auto md:text-right flex-col space-y-4 mt-10 mb-0 md:my-20">
          <h2 className="hero-landing">
            A platform for the official{' '}
            <a className="text-gradient font-bold">#100daysofcode</a> challenge!
          </h2>

          {/* headline */}
          <p className="text-xl md:text-2xl text-white italic underline decoration-[#c9e265]">
            Complete and keep track of each day of the challenge.
          </p>
        </div>

        {/* Image */}
        <div className="h-full w-full md:h-1/3 md:w-1/2">
          <Image
            alt="landing-image"
            width={100}
            height={60}
            src="/Logo/100daysofcode.png"
            layout="responsive"
          />
        </div>
      </div>
    </NavLanding>
  );
}

export default LandingPage;
