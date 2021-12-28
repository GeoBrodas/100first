import NavLanding from '@/Layouts/NavLanding';
import Image from 'next/image';

function LandingPage() {
  return (
    <NavLanding>
      {/* Hero */}
      <div className="flex flex-col items-center">
        <div className="items-center flex">
          <h2 className="hero-landing">A platform for the official</h2>
          <span>
            <Image
              src="/Logo/100daysofcode.png"
              width="300px"
              height="200px"
              alt="landing"
            />
          </span>
          <h2 className="hero-landing">challenge!</h2>
        </div>

        {/* headline */}
        <p className="text-2xl text-white italic underline decoration-[#c9e265]">
          Complete and keep track of each day
        </p>
      </div>
    </NavLanding>
  );
}

export default LandingPage;
