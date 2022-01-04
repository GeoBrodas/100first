import MainInputComponent from '@/components/InputComponent/MainInputComponent';
import MainTimerBody from '@/components/Timer/MainTimerBody';

function DashboardAdmin({ data }) {
  const day = data.length + 1;

  return (
    <div>
      <div className="flex space-x-4 bg-[#c9e265] w-fit py-2 px-4 rounded-md items-center">
        <h1 className="text-xl font-light py-1 px-2 rounded-md bg-emerald-100">
          Day {data.length + 1}/100
        </h1>
        <h3 className="font-normal text-lg">
          You have not started todays session yet
        </h3>
      </div>

      {/* Timer component */}
      <MainTimerBody />

      {/* Input field */}
      <MainInputComponent day={day} />
    </div>
  );
}

export default DashboardAdmin;
