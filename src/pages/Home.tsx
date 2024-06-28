import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='p-5'>
      Home
      <div className='flex gap-5 underline'>
        <Link to='/register'>Register</Link>
        <Link to='intro'>Intro</Link>
      </div>
    </div>
  );
}

export default Home;
