import { useState } from 'react';

function MainTimerBody() {
  const [time, setTimeout] = useState({
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

  return <div></div>;
}

export default MainTimerBody;
