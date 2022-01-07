import { useRouter } from 'next/router';

function NavigationBar({ id }) {
  const router = useRouter();

  return (
    <div className="flex space-x-4 mb-6">
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push('/dashboard')}
      >
        Dashboard
      </button>
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push('/dashboard/progress-so-far')}
      >
        Progress
      </button>
      <button
        className="bg-pink-400 md:hover:scale-105 transition ease-in-out duration-75 rounded-md text-white font-semibold px-4 py-2"
        onClick={() => router.push(`/profile/${id}`)}
      >
        Profile
      </button>
    </div>
  );
}

export default NavigationBar;
