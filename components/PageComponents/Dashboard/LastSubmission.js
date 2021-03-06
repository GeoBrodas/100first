import { formatTime } from 'lib/time';

function LastSubmission({ data, nextDay }) {
  if (data.length === 0) {
    return (
      <div className="flex mt-10 space-y-4 bg-gradient-to-r py-6 mb-10 from-orange-300 rounded-b-3xl to-amber-200 flex-col w-full md:w-2/3 mx-auto items-center">
        <p className="text-lg font-medium">
          Youre previous submissions appear here, start Day 1 today!
        </p>
      </div>
    );
  }

  const recentSubmissions = data[0]?.days.at(-1);

  const { day, day_report, project_link, time } = recentSubmissions;

  let links;
  if (project_link) {
    links = project_link.split(',');
  }

  return (
    <div className="flex mt-10 space-y-4 bg-gradient-to-r py-6 mb-10 from-orange-300 rounded-b-3xl to-amber-200 flex-col w-full md:w-2/3 mx-auto items-center">
      <h2 className="w-2/3 text-2xl md:text-3xl font-semibold text-CustomDark">
        {nextDay ? 'Yesterdays submission' : 'Todays submission'}
      </h2>

      <div className="w-2/3 mx-auto">
        <p className="text-xl md:text-2xl font-medium">Day {day} submission</p>
        <p className="text-lg md:text-xl font-light">
          You spent {formatTime(time)}
        </p>
        <p className="text-base md:text-lg">{day_report}</p>
        {project_link && (
          <div className="flex flex-col bg-white text-CustomDark w-fit px-6 py-2 my-2 rounded-md">
            <p className="text-lg font-semibold">Projects deployed 🚀</p>
            {links.map((link, index) => (
              <a
                className="underline hover:text-rose-300"
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LastSubmission;
