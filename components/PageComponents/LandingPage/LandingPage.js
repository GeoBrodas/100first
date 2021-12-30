import NavLanding from '@/Layouts/NavLanding';
import Image from 'next/image';

function LandingPage() {
  return (
    <NavLanding>
      {/* Hero */}
      <div className="flex items-center space-x-2">
        <div className="flex text-right flex-col px-5 space-y-4 my-20">
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
        <div className="h-1/3 w-1/2">
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
