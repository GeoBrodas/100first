import { useState } from 'react';

function MainInputComponent({ day }) {
  const [day_report, setDayReport] = useState('');
  const [project_link, setProjectLink] = useState('');

  async function sendData() {
    // if no day or day_report provided, return error
    if (!day_report || !project_link) {
      return alert('Missing required fields');
    } else if (day_report.length > 300) {
      return alert('Day report is too long');
    }

    // check if project_link contains valid links like www, or https, or .com
    const regex =
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(project_link)) {
      return alert('Project link is not valid');
    }

    // make fetch request to api route '/api/send-completed-day'
    await fetch('/api/send-completed-day', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day,
        day_report,
        project_link,
      }),
    });
  }

  return (
    <div className="flex flex-col">
      <p>{day.name} submission</p>

      <div>
        <label>What did you do today?</label>
        <input
          onChange={(e) => setDayReport(e.target.value)}
          type="text"
          placeholder="What did you do today?"
        />
      </div>

      <div>
        <label>
          Deployed any projects?{' '}
          <span className="italics text-gray-500">(Leave if none)</span>
        </label>
        <input
          onChange={(e) => setProjectLink(e.target.value)}
          type="text"
          placeholder="Project links seperated by comma - eg: https://portfolio.com, or https://github.com/geobrodas/todo-app"
        />
      </div>

      <button onClick={sendData}>
        <span className="text-white">Submit</span>
      </button>
    </div>
  );
}

export default MainInputComponent;
