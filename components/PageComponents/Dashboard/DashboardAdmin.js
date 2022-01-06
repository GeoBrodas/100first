import MainInputComponent from '@/components/InputComponent/MainInputComponent';
import MainTimerBody from '@/components/Timer/MainTimerBody';
import { formatTime } from 'lib/time';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

function DashboardAdmin({ data, email, nextDay, lastSubmittedDataTIme }) {
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
        <h1
          suppressHydrationWarning
          className="text-xl font-light py-1 px-2 rounded-md bg-emerald-100"
        >
          {!nextDay && 'Next ->'} Day {day}/100
        </h1>
        <h3 suppressHydrationWarning className="font-normal text-lg">
          {nextDay
            ? 'You have not started todays session yet'
            : 'Come back tomorrow to start a new session'}
        </h3>
      </div>

      {/* Timer component */}
      <MainTimerBody finalTime={finalTime} setFinalTime={setFinalTime} />

      {finalTime && (
        <Fade>
          <p className="text-center mb-10 text-white text-2xl">
            You have spent {formatTime(finalTime)} today!
          </p>
        </Fade>
      )}

      {/* Input field */}
      <MainInputComponent
        lastSubmittedDataTIme={lastSubmittedDataTIme}
        isNextDay={nextDay}
        setFinalTime={setFinalTime}
        finalTime={finalTime}
        email={email}
        day={day}
      />
    </div>
  );
}

export default DashboardAdmin;
