import Image from 'next/image';
import { useState } from 'react';
import { GiSaveArrow } from 'react-icons/gi';
import NormalInput from './NormalInput';
import SocialLink from './SocialLink';

function MainEditingArea({ sessionData }) {
  const { name, image } = sessionData?.user;

  // set formdata if available in database as well
  const [formData, setFormData] = useState({
    name: name,
    bio: '',
    githubUsername: '',
    twitterUsername: '',
    portfolio: '',
    imageUrl: image,
  });

  // send formData to api route '/api/requests/update-profile'
  function updateProfile() {
    // check if formdata.name is empty
    if (formData.name === '') {
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

    // make fetch request with query param NEXT_PUBLIC_API_ROUTE_KEY
    fetch(
      `/api/requests/update-profile?API_ROUTE_KEY=${process.env.NEXT_PUBLIC_API_ROUTE_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          bio: formData.bio,
          githubUsername: formData.githubUsername,
          twitterUsername: formData.twitterUsername,
          portfolio: formData.portfolio,
          imageUrl: formData.imageUrl,
        }),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          alert('Success');
        } else {
          alert(res.statusText);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  function disabledHandler() {
    return !formData.name || !formData.bio || !formData.githubUsername;
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
            field={'name'}
            value={formData.name}
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
        className="mx-auto disabled:bg-gray-400 ml-12 bg-purple-300 hover:bg-purple-500 rounded-lg hover:hover-animation-btn p-2 mt-6"
      >
        <div className="flex items-center space-x-2">
          <p className="text-white font-bold text-base md:text-lg">
            Save Profile
          </p>
          <GiSaveArrow className="text-white h-6 w-6" />
        </div>
      </button>
    </div>
  );
}

export default MainEditingArea;
