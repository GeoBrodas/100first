import EditProfile from '@/components/svg/EditProfile';
import NavLanding from '@/Layouts/NavLanding';
import Head from 'next/head';
import Image from 'next/image';

function Custom404() {
  return (
    <NavLanding>
      <Head>
        <title>Could not find page</title>
      </Head>
      <div className="grid rounded-lg h-auto bg-gray-50 my-10 py-6 place-content-center w-full md:w-2/3 mx-auto">
        <div className="flex px-4 space-y-6 p-2 flex-col">
          <div className="w-80 h-80 mx-auto">
            <Image
              src="/svg/404.svg"
              layout="responsive"
              alt="404 image"
              width="40"
              height="40"
            />
          </div>
          <p className="text-lg md:text-xl">
            Sorry, we couldnt find your page, this can be because,
          </p>
          <ul className="list-disc w-full md:w-2/3 ml-6 md:ml-4 text-base md:text-lg">
            <li>You have typed the wrong url</li>
            <li>The page you are looking for has been removed</li>
            <li>
              You may have not completed your profile yet. Start the challenge
              or visit the profile section in your dashboard
            </li>
          </ul>
        </div>
      </div>
    </NavLanding>
  );
}

export default Custom404;
