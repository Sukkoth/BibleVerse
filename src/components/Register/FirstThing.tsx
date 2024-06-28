import { useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader";

type Props = {
  togglePage: (to: "first" | "last") => void;
};

function FirstThing({ togglePage }: Props) {
  const navigate = useNavigate();
  return (
    <div className='p-4 h-full'>
      <div className='h-[75%]'>
        <PageHeader
          onBack={() =>
            navigate("/intro", {
              replace: true,
            })
          }
          suffix={<p>1/2</p>}
        />
        <div className='mt-20 text-center'>
          <h1 className='text-4xl font-semibold pb-3 tracking-wide font-sparta'>
            First things first!
          </h1>
          <p className='text-sm text-stone-500 tracking-wide'>
            Let's create account together
          </p>
        </div>

        <div className='mt-20'>
          <input
            type='text'
            className='rounded-3xl py-4 px-5 w-full bg-stone-900 border outline-none focus:border-stone-600 border-stone-800 mb-5'
            placeholder='example@something.com'
          />
          <input
            type='text'
            className='rounded-3xl py-4 px-5 w-full bg-stone-900 border outline-none focus:border-stone-600 border-stone-800 mb-5'
            placeholder='Enter password here'
          />
          <button
            className='w-full mt-5 rounded-3xl border-2 border-primary bg-primary hover:bg-primary-shade hover:border-primary-shade py-3 font-semibold'
            onClick={() => togglePage("last")}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <p className='text-stone-500 text-center pb-4'>Or use Social Media</p>
        <div>
          <button className='rounded-3xl py-4 px-3 w-full bg-stone-900 border border-stone-300 mb-5 flex items-center justify-center gap-4'>
            <img
              src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000'
              className='size-5'
              alt=''
            />{" "}
            <span>Sign up with Google</span>
          </button>
          <button className='rounded-3xl py-4 px-3 w-full bg-stone-700 border border-stone-700 flex items-center justify-center gap-4'>
            <img
              src='https://img.icons8.com/?size=100&id=95294&format=png&color=ffffff'
              className='size-5'
              alt=''
            />
            <span>Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstThing;
