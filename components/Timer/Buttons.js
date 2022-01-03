import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';

function Buttons({ start, resume, stop, reset, status }) {
  return (
    <div className="w-full md:w-1/3 flex justify-around">
      {status === 0 ? (
        <button className="timer-btn" onClick={start}>
          <AiOutlinePlayCircle className="h-7 w-7" />
        </button>
      ) : (
        ''
      )}

      {status === 1 ? (
        <div>
          <button className="timer-btn" onClick={stop}>
            <AiOutlinePauseCircle className="h-7 w-7" />
          </button>
          <button className="timer-btn" onClick={reset}>
            <TiTickOutline className="h-7 w-7" />
          </button>
        </div>
      ) : (
        ''
      )}

      {status === 2 ? (
        <div>
          <button className="timer-btn" onClick={resume}>
            <AiOutlinePlayCircle className="h-7 w-7" />
          </button>
          <button className="timer-btn" onClick={reset}>
            <TiTickOutline className="h-7 w-7" />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Buttons;
