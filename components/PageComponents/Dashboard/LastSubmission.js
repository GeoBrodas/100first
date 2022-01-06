import { formatTime } from 'lib/time';

function LastSubmission({ data, nextDay }) {
  const recentSubmissions = data[0].days.at(-1);

  const { day, day_report, project_link, time } = recentSubmissions;

  const links = project_link.split(',');
  console.log(links);

  return (
    <div className="flex space-y-4 bg-gradient-to-r py-6 mb-10 from-orange-300 rounded-md to-amber-200 flex-col w-full md:w-2/3 mx-auto items-center">
      <h2 className="w-2/3 text-3xl font-semibold text-CustomDark">
        {nextDay ? 'Yesterdays submission' : 'Todays submission'}
      </h2>

      <div className="w-2/3 mx-auto">
        <p className="text-2xl font-medium">Day {day} submission</p>
        <p className="text-xl font-light">You spent {formatTime(time)}</p>
        <p className="text-lg">{day_report}</p>
        {links.length !== 0 && (
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
