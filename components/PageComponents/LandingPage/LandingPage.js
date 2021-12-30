import NavLanding from '@/Layouts/NavLanding';
import Image from 'next/image';

function LandingPage() {
  return (
    <NavLanding>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center md:space-x-2">
        <div className="flex md:text-right flex-col px-5 space-y-4 my-10 md:my-20">
          <div className="flex">
            <h2 className="hero-landing">
              A platform for the official
              <span className="text-gradient font-extrabold text-3xl mx-2">
                #100daysofcode
              </span>
              challenge!
            </h2>
          </div>

          {/* headline */}
          <p className="text-2xl text-white italic underline decoration-[#c9e265]">
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
