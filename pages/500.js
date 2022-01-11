import NavLanding from '@/Layouts/NavLanding';
import Head from 'next/head';
import Image from 'next/image';

function Custom500() {
  return (
    <NavLanding>
      <Head>
        <title>Internal Server Error</title>
      </Head>
      <div className="grid rounded-lg h-auto bg-gray-50 my-10 py-6 place-content-center w-full md:w-2/3 mx-auto">
        <div className="flex px-4 space-y-6 p-2 flex-col">
          <div className="w-80 h-80 mx-auto">
            <Image
              src="/svg/500.svg"
              layout="responsive"
              alt="404 image"
              width="40"
              height="40"
            />
          </div>
          <p className="text-lg md:text-xl px-6">
            Something went wrong on the server-side. Please try again later or
            try contacting the developer. This may be because,
          </p>
          <ul className="list-disc w-full md:w-2/3 md:px-6 ml-6 md:ml-4 text-base md:text-lg">
            <li>Back-end services may be down</li>
            <li>An exceptional error may have occured</li>
            <li>
              You may have reached the maximum number of requests allowed.
            </li>
          </ul>
        </div>
      </div>
    </NavLanding>
  );
}

export default Custom500;
