function Buttons({ start, resume, stop, reset, status }) {
  return (
    <div className="w-1/2 md:w-1/3 flex justify-around">
      {status === 0 ? (
        <button className="timer-btn" onClick={start}>
          Start
        </button>
      ) : (
        ''
      )}

      {status === 1 ? (
        <div>
          <button className="timer-btn" onClick={stop}>
            Stop
          </button>
          <button className="timer-btn" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}

      {status === 2 ? (
        <div>
          <button className="timer-btn" onClick={resume}>
            Resume
          </button>
          <button className="timer-btn" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Buttons;
