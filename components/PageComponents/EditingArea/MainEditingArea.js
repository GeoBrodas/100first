import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { GiSaveArrow } from 'react-icons/gi';
import NormalInput from './NormalInput';
import SocialLink from './SocialLink';

function MainEditingArea({ sessionData, prevUserData }) {
  const { name, image, email } = sessionData?.user;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { username, bio, githubUsername, twitterUsername, portfolio, _id } =
    prevUserData;

  // set formdata if available in database as well
  const [formData, setFormData] = useState({
    username: username || name,
    imageUrl: image,
    bio: bio || '',
    githubUsername: githubUsername || '',
    twitterUsername: twitterUsername || '',
    portfolio: portfolio || '',
  });

  // send formData to api route '/api/requests/update-profile'
  async function updateProfile() {
    if (
      bio === formData.bio &&
      username === formData.username &&
      githubUsername === formData.githubUsername
    ) {
      alert('No changes detected in form, avoid sending unecessary requests');
      return;
    }

    // check if formdata.name is empty
    if (formData.username === '') {
      alert('Please enter your name');
      return;
    }

    // check if formData.bio is empty
    if (formData.bio === '') {
      alert('Please enter your bio');
      return;
    }

    // check if formData.githubUsername is empty
    if (formData.githubUsername === '') {
      alert('Please enter your github username');
      return;
    }

    // if bio is too long, throw error
    if (formData.bio.length > 200) {
      alert('Your bio is too long');
      return;
    }

    const toastId = toast.loading('Updating your profile...');

    // make fetch request with query param NEXT_PUBLIC_API_ROUTE_KEY
    await fetch(
      `/api/requests/update-profile?API_ROUTE_KEY=${process.env.NEXT_PUBLIC_API_ROUTE_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          email,
        }),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          toast.dismiss(toastId);
          toast.success('Profile updated successfully');
        } else {
          if (res.statusText === 'Bad Request') {
            toast.dismiss(toastId);
            toast.error('Server detected an error while updating profile');
          } else {
            toast.dismiss(toastId);
            toast.error(res.statusText || 'Something went wrong');
          }
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        toast.error(err.response.data.message || 'Something went wrong');
      });

    setIsSubmitted(true);
  }

  function disabledHandler() {
    return (
      !formData.username ||
      !formData.bio ||
      !formData.githubUsername ||
      isSubmitted ||
      (username === formData.username &&
        bio === formData.bio &&
        githubUsername === formData.githubUsername)
    );
  }

  return (
    <div className="bg-gradient-1 rounded-xl w-full md:w-2/3 mx-auto my-14 px-4 py-6">
      <div className="flex flex-col md:flex-row-reverse justify-center">
        {/* Image */}
        <div className="w-1/3 md:w-1/5 h-20 mx-auto md:mr-20 md:mt-10">
          <Image
            className="rounded-full"
            src={formData.imageUrl}
            alt="profile"
            layout="responsive"
            width="70"
            height="70"
          />
        </div>

        <div className="w-full md:w-3/5 mt-20 md:mt-0 mx-auto flex flex-col">
          <p className="text-xl md:text-2xl my-4 font-bold text-white">
            Edit your profile
          </p>

          <NormalInput
            title="Name *"
            field={'username'}
            value={formData.username}
            placeholder="John Doe"
            setFormData={setFormData}
            formData={formData}
          />

          <NormalInput
            field="portfolio"
            title="Portfolio"
            value={formData.portfolio}
            placeholder="https://georgey.codes"
            setFormData={setFormData}
            formData={formData}
          />

          <NormalInput
            field="bio"
            title="Bio *"
            value={formData.bio}
            placeholder="I am a developer"
            setFormData={setFormData}
            formData={formData}
          />

          <SocialLink
            title="GitHub username *"
            value={formData.githubUsername}
            setFormData={setFormData}
            labelData="https://github.com/"
            formData={formData}
            placeholder="GeoBrodas"
            field={'githubUsername'}
          />
          <SocialLink
            title="Twitter username"
            value={formData.twitterUsername}
            setFormData={setFormData}
            formData={formData}
            labelData="https://twitter.com/"
            placeholder="BrodasGeo"
            field={'twitterUsername'}
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        disabled={disabledHandler()}
        onClick={updateProfile}
        className="mx-auto disabled:bg-gray-400 ml-9 bg-purple-300 hover:bg-purple-500 rounded-lg hover:hover-animation-btn p-2 mt-6"
      >
        <div className="flex items-center space-x-2">
          <p className="text-white font-bold text-base md:text-lg">
            Save Profile
          </p>
          <GiSaveArrow className="text-white h-6 w-6" />
        </div>
      </button>

      {isSubmitted && (
        <div className="bg-white animate-bounce flex justify-between items-center w-2/3 mx-auto px-4 py-2 rounded-lg shadow-xl text-CustomDark mt-8">
          <div>
            <p className="text-lg md:text-xl">
              Your profile has been updated! ✨
            </p>
            <p className="text-base md:text-lg">
              You can now view your profile{' '}
              <Link href={`/profile/${_id}`}>
                <a target="_blank" className="underline hover:">
                  {' '}
                  here
                </a>
              </Link>
            </p>
          </div>
          {/* 
          <div
            onClick={() => setIsSubmitted(false)}
            className="hover:cursor-pointer"
          >
            <MdClose className="h-6 w-6 hover:scale-110 transition ease-in-out duration-75" />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default MainEditingArea;
