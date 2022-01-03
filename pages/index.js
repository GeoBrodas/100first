import LandingPage from '@/components/PageComponents/LandingPage/LandingPage';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>100first - Complete with focus</title>
        {/* description */}
        <meta
          name="description"
          content="100first - Complete with focus, a web application
        that helps you to learn the basics of programming and complete the #100daysofcode challenge
        in a fun and easy way."
        />
      </Head>

      <LandingPage />
    </div>
  );
}
