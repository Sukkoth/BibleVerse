function HomeStats() {
  return (
    <div className='mt-10 h-56 flex gap-4'>
      <div className='bg-[#312e29] h-full w-[70%] rounded-3xl center-all flex-col'>
        <img
          src='https://img.icons8.com/?size=100&id=46261&format=png&color=000000'
          alt=''
          className='size-14 p-3 rounded-full bg-[#514531] mb-3'
        />

        <h1 className='text-3xl font-bold pb-1'>78</h1>
        <p className='text-stone-400'>Days Streak</p>
      </div>
      <div className='flex flex-col w-full h-full gap-4'>
        <div className='w-full h-full bg-[#362626] rounded-3xl center-all'>
          <img
            src='https://img.icons8.com/?size=100&id=114325&format=png&color=000000'
            alt=''
            className='size-14 p-3 rounded-full bg-[#583636] mb-3'
          />
          <div className='ms-5'>
            <h1 className='text-3xl font-bold pb-1'>45</h1>
            <p className='text-stone-400'>Books read</p>
          </div>
        </div>
        <div className='w-full h-full bg-[#252A31] rounded-3xl center-all'>
          <img
            src='https://img.icons8.com/?size=100&id=g8ltXTwIfJ1n&format=png&color=000000'
            alt=''
            className='size-14 p-3 rounded-full bg-[#384456] mb-3'
          />
          <div className='ms-5'>
            <h1 className='text-3xl font-bold pb-1'>78</h1>
            <p className='text-stone-400'>Chapters read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStats;
