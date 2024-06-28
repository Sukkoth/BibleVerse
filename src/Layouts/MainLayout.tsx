import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className='bg-stone-900 h-[100dvh] w-full text-white'>
      <Outlet />
    </main>
  );
}

export default MainLayout;
