function Header() {
  return (
    <nav className='flex justify-between'>
      <div>
        <img
          src='https://img.icons8.com/?size=100&id=83195&format=png&color=ffffff'
          className='size-7 hover:brightness-75 duration-300 cursor-pointer'
          alt='menu'
        />
      </div>
      <div className='flex gap-6'>
        <div>
          <img
            src='https://img.icons8.com/?size=100&id=a22XqWJ39gEZ&format=png&color=ffffff'
            className='size-7 hover:brightness-75 duration-300 cursor-pointer'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://img.icons8.com/?size=100&id=ftMXZGFfen2R&format=png&color=ffffff'
            className='size-7 hover:brightness-75 duration-300 cursor-pointer'
            alt=''
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
