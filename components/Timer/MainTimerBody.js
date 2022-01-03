import { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';

function MainTimerBody() {
  const [time, setTime] = useState({
    ms: 0,
    s: 58,
    m: 59,
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
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
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
  };

  //   resume timer function
  const resumeTimer = () => startTimer();

  return (
    <div className="flex my-10 rounded-lg items-center w-full md:w-2/3 h-24 mx-auto justify-around bg-gradient-to-r from-red-200 via-orange-100 to-amber-100 p-2">
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
