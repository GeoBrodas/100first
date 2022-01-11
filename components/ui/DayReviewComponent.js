import { formatTime } from 'lib/time';

function DayReviewComponent({ dayReport, projectLink, day, time }) {
  let links = projectLink.split(',');

  return (
    <div className="flex flex-col rounded-md bg-CustomGreen w-11/12 md:w-80 py-6 mx-auto mb-6 px-6 justify-center">
      <div className="">
        <p className="text-2xl text-right font-bold">Day {day}</p>
        <p className="text-xl text-right font-normal">
          Time spent {formatTime(time)}
        </p>
        <p className="text-lg mt-4 font-normal">{dayReport}</p>
        {links[0] !== '' ? (
          <div className="flex flex-col bg-white text-CustomDark px-4 py-2 my-2 rounded-md">
            <p className="text-xl font-semibold">Deployed projects 🚀</p>
            {links.map((link, index) => (
              <a
                className="text-CustomDark underline hover:text-gray-500"
                href={link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-xl font-normal bg-white rounded-md px-4 py-2 mt-2">
            No projects deployed
          </p>
        )}
      </div>
    </div>
  );
}

export default DayReviewComponent;
