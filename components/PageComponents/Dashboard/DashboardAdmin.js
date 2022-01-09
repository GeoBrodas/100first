import MainInputComponent from '@/components/InputComponent/MainInputComponent';
import MainTimerBody from '@/components/Timer/MainTimerBody';
import { formatTime } from 'lib/time';
import { Fragment, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { GiPartyPopper } from 'react-icons/gi';
import { MdSkipNext } from 'react-icons/md';
import ChallengeCompleted from './ChallengeCompleted';
import LastSubmission from './LastSubmission';

function DashboardAdmin({
  data,
  email,
  nextDay,
  serverTimeOfLastData,
  dayCount,
  profileId,
}) {
  // set final time
  const [finalTime, setFinalTime] = useState('');

  let day;

  if (data.length === 0) {
    day = 1;
  } else {
    day = data[0].days.length + 1;
  }

  let n = 100;

  return (
    <div>
      <div className="flex space-x-4 bg-[#c9e265] w-fit py-2 px-4 rounded-md items-center">
        {dayCount === 100 ? (
          <div className="flex space-x-2">
            <h2 className="text-lg md:text-xl text-pink-800 font-bold">
              Challenge completed!
            </h2>
            <GiPartyPopper className="h-4 w-4 md:h-6 md:w-6 text-pink-800" />
          </div>
        ) : (
          <Fragment>
            <h1
              suppressHydrationWarning
              className="text-lg flex items-center whitespace-nowrap md:text-xl font-normal py-1 px-2 rounded-md bg-emerald-100"
            >
              {!nextDay && (
                <MdSkipNext className="mr-2 text-CustomDark h-8 w-8" />
              )}{' '}
              Day {day}/100
            </h1>
            <h3
              suppressHydrationWarning
              className="font-normal text-base md:text-lg"
            >
              {nextDay
                ? 'You have not started todays session yet'
                : 'Come back tomorrow to start a new session'}
            </h3>
          </Fragment>
        )}
      </div>

      {dayCount === 100 ? (
        <ChallengeCompleted profileId={profileId} />
      ) : (
        <Fragment>
          {nextDay && (
            <MainTimerBody finalTime={finalTime} setFinalTime={setFinalTime} />
          )}

          {finalTime && (
            <Fade>
              <p className="text-center mb-10 text-white text-2xl">
                You have spent {formatTime(finalTime)} today!
              </p>
            </Fade>
          )}

          {nextDay && (
            <MainInputComponent
              serverTimeOfLastData={serverTimeOfLastData}
              isNextDay={nextDay}
              setFinalTime={setFinalTime}
              finalTime={finalTime}
              email={email}
              day={day}
            />
          )}

          {data[0]?.days.length !== 0 && (
            <LastSubmission nextDay={nextDay} data={data} />
          )}
        </Fragment>
      )}
    </div>
  );
}

export default DashboardAdmin;
