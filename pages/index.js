import LandingPage from '@/components/PageComponents/LandingPage/LandingPage';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>100first - Track, share, complete the challenge</title>
        {/* description */}
        <meta
          name="description"
          content="100first - Complete with focus, a web application
        that helps you to learn the basics of programming and complete the #100daysofcode challenge
        in a fun and easy way."
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>100first - Track, share, complete the challenge</title>
        <meta
          name="title"
          content="100first - Track, share, complete the challenge"
        />
        <meta
          name="description"
          content="100first - Complete with focus, a web application that helps you to learn the basics of programming and complete the #100daysofcode challenge in a fun and easy way."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://100first.vercel.app/" />
        <meta
          property="og:title"
          content="100first - Track, share, complete the challenge"
        />
        <meta
          property="og:description"
          content="100first - Complete with focus, a web application that helps you to learn the basics of programming and complete the #100daysofcode challenge in a fun and easy way."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1642061460/meta-stuff_ivgmkk.png"
        />

        {/* <!-- Twitter -- >  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://100first.vercel.app/" />
        <meta
          property="twitter:title"
          content="100first - Track, share, complete the challenge"
        />
        <meta
          property="twitter:description"
          content="100first - Complete with focus, a web application that helps you to learn the basics of programming and complete the #100daysofcode challenge in a fun and easy way."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1642061460/meta-stuff_ivgmkk.png"
        />
      </Head>

      <LandingPage />
    </div>
  );
}
