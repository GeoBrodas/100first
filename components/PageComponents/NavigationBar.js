import Link from 'next/link';
import { useRouter } from 'next/router';

function NavigationBar() {
  const router = useRouter();

  return (
    <div className="flex space-x-4 mb-6">
      {/* <Link passHref href="/dashboard"> */}
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push('/dashboard')}
      >
        Dashboard
      </button>
      {/* </Link> */}
      {/* <Link passHref href="/dashboard/progress-so-far"> */}
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push('/dashboard/progress-so-far')}
      >
        Progress
      </button>
      {/* </Link> */}
      {/* <Link passHref href="/dashboard/edit-profile"> */}
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push(`/dashboard/edit-profile`)}
      >
        Edit Profile
      </button>
      {/* </Link> */}
    </div>
  );
}

export default NavigationBar;
