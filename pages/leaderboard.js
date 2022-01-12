import NavLanding from '@/Layouts/NavLanding';
import { MdConstruction } from 'react-icons/md';

function LeaderBoardPage() {
  return (
    <NavLanding>
      <div className="grid h-screen place-content-center">
        <MdConstruction className="text-white mx-auto w-20 h-20" />
        <h1 className="text-center text-white text-2xl">Coming soon....</h1>
      </div>
    </NavLanding>
  );
}

export default LeaderBoardPage;
