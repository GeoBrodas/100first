import DayReviewComponent from '@/components/ui/DayReviewComponent';
import { convertToDate } from 'lib/time';
import Image from 'next/image';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdWork } from 'react-icons/md';

function ProfileComponent({ userData }) {
  const {
    username,
    bio,
    twitterUsername,
    githubUsername,
    portfolio,
    email,
    imageUrl,
    days,
  } = userData;

  const structuredArray = days.map((day) => ({
    at: day.at,
    day: day.day,
    projectLink: day.project_link,
    dayReport: day.day_report,
    time: day.time,
  }));

  const startDate = structuredArray.at(0).at;
  const dateArray = convertToDate(startDate).toString().split(' ');
  const year = dateArray[3];
  const month = dateArray[1];
  const day = dateArray[2];

  return (
    <div className="md:w-full my-10 flex mx-auto flex-col">
      <div className="mx-auto flex flex-col">
        <Image
          className="rounded-full"
          alt={username}
          layout="fixed"
          width="150"
          height="150"
          src={imageUrl}
        />
      </div>

      {startDate && (
        <p className="text-center mt-4 text-gray-200 md:text-lg">
          Started the challenge on {month} {day} {year}
        </p>
      )}

      {bio ? (
        <p className="italic text-center my-4 text-white md:text-lg">{bio}</p>
      ) : (
        <p className="text-gray-300 text-center my-4">404 bio not found</p>
      )}

      <div className="mx-auto flex space-x-4">
        {githubUsername && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${githubUsername}`}
          >
            <BsGithub className="h-6 w-6 text-white" />
          </a>
        )}
        {twitterUsername && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/${twitterUsername}`}
          >
            <BsTwitter className="h-6 w-6 text-white" />
          </a>
        )}
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-5">
        {portfolio && (
          <a
            className="flex space-x-2 my-4"
            target="_blank"
            rel="noreferrer"
            href={portfolio}
          >
            <MdWork className="h-6 w-6 text-white" />
            <p className="text-white underline">{portfolio}</p>
          </a>
        )}

        {email && (
          <a
            className="flex space-x-2 items-center"
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
          >
            <MdEmail className="h-6 w-6 text-white" />
            <p className="text-white underline">{email}</p>
          </a>
        )}
      </div>

      <div className="my-8">
        {days.length === 0 ? (
          <p className="text-center text-white">
            Hey I didnt start the challenge yet, but I will soon! 😅
          </p>
        ) : (
          <div
            className={`grid gap-y-10 grid-cols-1 md:grid-cols-2 ${
              days.length == 1
                ? 'lg:grid-cols-1'
                : days.length === 2
                ? 'lg:grid-cols-2'
                : days.length >= 3 && 'lg:grid-cols-3'
            }`}
          >
            {structuredArray.reverse().map((day, index) => (
              <DayReviewComponent
                key={index}
                projectLink={day.projectLink}
                day={day.day}
                time={day.time}
                dayReport={day.dayReport}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileComponent;
