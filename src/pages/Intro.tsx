import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  return (
    <div className='h-full p-2 '>
      <div className='center-all flex-col gap-1 h-5/6'>
        <h1 className='italic text-5xl'>Bible Verse</h1>
        <p className='italic'>Your Companion in Scripture Reading</p>
      </div>
      <div className='mt-1 space-y-4 px-5'>
        <button className='w-full rounded-3xl border-2 border-primary bg-primary py-3 font-semibold hover:bg-primary-shade hover:border-primary-shade'>
          Get Started
        </button>
        <button
          className='w-full rounded-3xl bg-transparent border-primary border-2 py-3 font-semibold hover:border-primary-shade hover:text-primary-shade text-primary'
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Intro;
