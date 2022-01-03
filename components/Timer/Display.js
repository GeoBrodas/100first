import { Fragment } from 'react/cjs/react.development';

function Display({ time }) {
  const hoursDisplay = () => {
    if (time.h === 0) return '';
    else
      return (
        <Fragment>
          <span className="timer-dial">
            {time.h >= 10 ? time.h : '0' + time.h}
          </span>{' '}
          :
        </Fragment>
      );
  };

  return (
    <div className="w-1/2 md:w-1/3 text-xl font-extrabold items-center flex justify-evenly space-x-2">
      {hoursDisplay()}
      <span className="timer-dial">
        {time.m >= 10 ? time.m : '0' + time.m}
      </span>{' '}
      :
      <span className="timer-dial">{time.s >= 10 ? time.s : '0' + time.s}</span>{' '}
      :
      <span className="timer-dial">
        {time.ms >= 100
          ? time.ms
          : time.ms >= 10
          ? '0' + time.ms
          : '00' + time.ms}
      </span>
    </div>
  );
}

export default Display;
