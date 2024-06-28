import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function BottomNavLayout() {
  return (
    <main className='h-full relative'>
      <Outlet />
      <BottomNav />
    </main>
  );
}

export default BottomNavLayout;
