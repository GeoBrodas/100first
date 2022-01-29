import NavLanding from '@/Layouts/NavLanding';
import Image from 'next/image';
import AboutTheApp from './AboutTheApp';
import AboutTheChallenge from './AboutTheChallenge';
import FeaturesOfTheApp from './FeaturesOfTheApp';
import GetStarted from './GetStarted';

function LandingPage() {
  return (
    <NavLanding>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center md:space-x-2 my-16 md:my-10">
        <div className="flex md:px-2 w-full md:w-2/4 mx-auto flex-col space-y-4 mt-10 mb-0 my-20">
          <h2 className="hero-landing text-center md:text-right">
            A platform for the{' '}
            <a className="text-gradient font-bold">#100daysofcode</a> challenge!
          </h2>

          {/* headline */}
          <p className="text-xl md:text-2xl text-center md:text-right font-light text-white italic">
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

      {/* Product hunt stuff */}
      <div className="w-auto flex justify-center">
        <a
          href="https://www.producthunt.com/posts/100first?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-100first"
          target="_blank"
          rel="noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=328993&theme=light"
            alt="100First - Track, Write, and complete the #100daysofcode seamlessly. | Product Hunt"
            style={{ width: '250px', height: '54px' }}
            width="250"
            height="54"
          />
        </a>
      </div>

      {/* What is #100daysofcode challenge? */}
      <AboutTheChallenge />

      {/* How can the app help? */}
      <AboutTheApp />

      {/* Features */}
      <FeaturesOfTheApp />

      {/* CTA */}
      <GetStarted />
    </NavLanding>
  );
}

export default LandingPage;
