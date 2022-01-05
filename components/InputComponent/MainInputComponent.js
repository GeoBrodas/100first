import { useState } from 'react';

function MainInputComponent({ day }) {
  const [day_report, setDayReport] = useState('');
  const [project_link, setProjectLink] = useState('');

  async function sendData() {
    // if no day or day_report provided, return error
    if (!day_report) {
      return alert('Missing required fields');
    } else if (day_report.length > 300) {
      return alert('Day report is too long');
    }

    // check if project_link contains valid links in the format 'https://something.com' or 'www.something.com'
    const regex =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gi;

    if (project_link && !regex.test(project_link)) {
      return alert('Project link is not valid');
    }

    // make fetch request to api route '/api/send-completed-day'
    // await fetch('/api/send-completed-day', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     day,
    //     day_report,
    //     project_link,
    //   }),
    // });

    // clear fields
    setDayReport('');
    setProjectLink('');
  }

  return (
    <div className="flex flex-col rounded-lg py-6 bg-CustomGreen text-CustomDark mx-auto items-center px-4 md:px-0  w-full md:w-2/3">
      <div className="space-y-4 w-full md:w-2/3">
        <p className="text-2xl font-semibold">Day {day} submission</p>

        <div className="flex flex-col space-y-2">
          <label className="text-xl ">What did you do today?</label>
          <textarea
            className="input-custom"
            rows="2"
            required
            value={day_report}
            onChange={(e) => setDayReport(e.target.value)}
            type="text"
            placeholder="What did you do today?"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>
            Deployed any projects?{' '}
            <span className="italic text-gray-700">(Leave if none)</span>
          </label>
          <input
            className="input-custom"
            value={project_link}
            onChange={(e) => setProjectLink(e.target.value)}
            type="text"
            placeholder="Project links seperated by comma - eg: https://github.com/geobrodas/todo-app"
          />
        </div>

        <button
          onClick={sendData}
          className="bg-CustomDark p-2 font-bold hover-animation-btn hover:hover-gradient-bg rounded-md"
        >
          <span className="text-white">Submit</span>
        </button>
      </div>
    </div>
  );
}

export default MainInputComponent;
