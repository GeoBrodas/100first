import MainInputComponent from '@/components/InputComponent/MainInputComponent';
import MainTimerBody from '@/components/Timer/MainTimerBody';
import { formatTime } from 'lib/time';
import { useState } from 'react';

function DashboardAdmin({ data, email }) {
  // set final time
  const [finalTime, setFinalTime] = useState('');

  let day;

  if (data.length === 0) {
    day = 1;
  } else {
    day = data[0].days.length + 1;
  }

  return (
    <div>
      <div className="flex space-x-4 bg-[#c9e265] w-fit py-2 px-4 rounded-md items-center">
        <h1 className="text-xl font-light py-1 px-2 rounded-md bg-emerald-100">
          Day {day}/100
        </h1>
        <h3 className="font-normal text-lg">
          You have not started todays session yet
        </h3>
      </div>

      {/* Timer component */}
      <MainTimerBody finalTime={finalTime} setFinalTime={setFinalTime} />

      {finalTime && (
        <p className="text-center mb-10 text-white text-2xl">
          You have spent {formatTime(finalTime)} today!
        </p>
      )}

      {/* Input field */}
      <MainInputComponent email={email} day={day} />
    </div>
  );
}

export default DashboardAdmin;
