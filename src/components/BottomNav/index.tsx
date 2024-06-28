import BottomNavItem from "./BottomNavItem";

function BottomNav() {
  return (
    <nav
      className='absolute flex items-center justify-around bottom-0 inset-x-0 bg-stone-800 px-5 py-3'
      id='bottom-nav'
    >
      <BottomNavItem
        imageUrl='https://img.icons8.com/?size=100&id=9672&format=png&color=ffffff'
        to='/'
      />
      <BottomNavItem
        imageUrl='https://img.icons8.com/?size=100&id=98076&format=png&color=ffffff'
        to='stats'
      />
      <BottomNavItem
        imageUrl='https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=ffffff'
        to='account'
      />

      <div className='size-12 bg-primary hover:bg-primary-shade cursor-pointer rounded-full before:content-["+"] before:absolute relative before:text-4xl before:left-[27%] before:bottom-[18%] '></div>
    </nav>
  );
}

export default BottomNav;
