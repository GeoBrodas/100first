import MainInputComponent from '@/components/InputComponent/MainInputComponent';
import MainTimerBody from '@/components/Timer/MainTimerBody';

function DashboardAdmin({ data, email }) {
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
      <MainTimerBody />

      {/* Input field */}
      <MainInputComponent email={email} day={day} />
    </div>
  );
}

export default DashboardAdmin;
