import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function BottomNavLayout() {
  return (
    <main className='h-full relative overflow-hidden'>
      <div className='h-[93dvh] overflow-y-auto pb-2'>
        <Outlet />
      </div>
      <BottomNav />
    </main>
  );
}

export default BottomNavLayout;
