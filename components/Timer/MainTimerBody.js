import { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';

function MainTimerBody({ setFinalTime, finalTime }) {
  const [time, setTime] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });

  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  //   not starter -> 0
  //   started -> 1
  //   paused / stopped -> 2

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  //   start timer function
  const startTimer = () => {
    // run as normal on first click!
    if (finalTime === '') {
      run();
      setStatus(1);
      setInterv(setInterval(run, 10));
      return;
    }

    // if user tries to start timer again the previosuly set set Time will be lost
    if (
      confirm(
        'Are you sure you want to start the timer?' +
          '\n' +
          'This will reset the timer and the set time will be lost.'
      ) === true
    ) {
      run();
      setStatus(1);
      setInterv(setInterval(run, 10));
      setFinalTime('');
    } else {
      return;
    }
  };

  //   pause timer function
  const pauseTimer = () => {
    clearInterval(interv);
    setStatus(2);
  };

  // reset timer function
  const resetTimer = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });

    // set setFinalTime
    setFinalTime(`${time.h}:${time.m}:${time.s}:${time.ms}`);
  };

  //   resume timer function
  const resumeTimer = () => startTimer();

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row my-10 rounded-lg items-center w-full md:w-2/3 h-auto md:h-24 mx-auto justify-around bg-gradient-to-r from-red-200 via-orange-100 to-amber-100 p-2">
      <Display time={time} />
      <Buttons
        status={status}
        resume={resumeTimer}
        reset={resetTimer}
        stop={pauseTimer}
        start={startTimer}
      />
    </div>
  );
}

export default MainTimerBody;
