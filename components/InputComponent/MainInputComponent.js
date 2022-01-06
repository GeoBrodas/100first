import { useState } from 'react';

function MainInputComponent({
  day,
  email,
  finalTime,
  setFinalTime,
  isNextDay,
  serverTimeOfLastData,
}) {
  const [day_report, setDayReport] = useState('');
  const [project_link, setProjectLink] = useState('');

  const time = new Date().toLocaleString().split(',')[0].split('/')[1];

  async function sendData() {
    // if user has already submitted a challenge submission return error message
    if (!isNextDay) {
      setDayReport('');
      setProjectLink('');
      setFinalTime('');
      return alert('You have already completed a session today');
    }

    // if no finalTime, return error
    if (!finalTime) {
      setDayReport('');
      setProjectLink('');
      return alert(
        'You have not started todays session yet \nPlease start the timer to start your session'
      );
    }

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

    // make fetch request to api route '/api/send-completed-day' with API_ROUTE_KEY as query param
    await fetch(
      `/api/requests/send-completed-day?API_ROUTE_KEY=${process.env.NEXT_PUBLIC_API_ROUTE_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientLocalTime: serverTimeOfLastData,
          time: finalTime,
          email,
          day,
          day_report,
          project_link,
        }),
      }
    )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert('Success');
        } else {
          alert(res.statusText);
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    // clear fields
    setDayReport('');
    setProjectLink('');
    setFinalTime('');
  }

  function disabledHandler() {
    return !day_report || !finalTime;
  }

  return (
    <div className="flex flex-col rounded-lg py-6 mb-10 bg-CustomGreen text-CustomDark mx-auto items-center px-4 md:px-0  w-full md:w-2/3">
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
          disabled={disabledHandler()}
          onClick={sendData}
          className="hover:hover-gradient-bg hover-animation-btn bg-CustomDark disabled:bg-gray-300 disabled:text-black p-2 font-bold rounded-md"
        >
          <span className="text-white">Submit</span>
        </button>
      </div>
    </div>
  );
}

export default MainInputComponent;
