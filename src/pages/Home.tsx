import Card from "../components/Card";
import Header from "../components/Home/Header";
import HomeStats from "../components/Home/HomeStats";

function Home() {
  return (
    <div className='p-5'>
      <Header />
      <div className='text-center mt-10'>
        <p className='text-stone-500 font-medium pb-1'>INSIGHT TIMER</p>
        <h1 className='text-4xl font-medium'>Hi! Sukkoth Teklu</h1>
      </div>
      <HomeStats />
      <div className='pt-4'>
        <Card bgColor='bg-secondary' bgScrambled>
          <div className='flex w-full h-full'>
            <div className='w-2/3 text-start'>
              <h1 className='text-3xl font-bold'>Your Weekly Progress</h1>
              <p className='pt-2 text-sm text-stone-100 font-medium'>
                Your weekly report
              </p>
            </div>
            <div className='w-1/3 center-all'>
              <div className='h-full aspect-square border-[0.7rem] rounded-full center-all'>
                <p className='text-2xl font-bold'>65</p>
                <p className='text-xs mt-2'>%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className='pt-4'>
        <Card bgColor='bg-green-300/20'>
          <div className='flex w-full h-full'>
            <div className='w-2/3 text-start'>
              <h1 className='text-3xl font-bold'>
                Learn about <br /> Bible
              </h1>
              <div className='w-fit mt-2'>
                <Card.CheckNow />
              </div>
            </div>
            <div className='center-all w-1/3 object-cover'>
              <img
                src='images/reading1.png'
                alt='reading'
                className='object-cover'
              />
            </div>
          </div>
        </Card>
      </div>
      <div className='pt-4'>
        <Card bgColor='bg-[#68678d]'>
          <div className='flex gap-6 w-full'>
            <div className='center-all w-1/3 h-[7rem]'>
              <img src='images/praying.png' alt='reading' className='h-full' />
            </div>
            <div className='text-start'>
              <h1 className='text-3xl font-bold'>
                Get to know <br /> God more
              </h1>
              <div className='w-fit mt-2'>
                <Card.CheckNow />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
