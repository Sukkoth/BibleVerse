import { useState } from "react";
import PageHeader from "../PageHeader";
import { useNavigate } from "react-router-dom";

type Props = {
  togglePage: (to: "first" | "last") => void;
};

function LastThing({ togglePage }: Props) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const navigate = useNavigate();

  return (
    <div className='p-4 h-full'>
      <div className='h-[75%]'>
        <PageHeader onBack={() => togglePage("first")} suffix={<p>2/2</p>} />
        <div className='mt-20 text-center'>
          <h1 className='text-4xl font-semibold pb-3 tracking-wide font-sparta'>
            Last things last!
          </h1>
          <p className='text-sm text-stone-500 tracking-wide'>
            Let's create account together
          </p>
        </div>

        <div className='mt-20 flex justify-evenly'>
          <button
            className={`px-10 py-3 border border-stone-700 rounded-3xl relative before:content-[""] before:absolute before:size-3 before:rounded-full before:bg-secondary before:left-3 before:inset-y-[18px] hover:border-stone-700 hover:bg-stone-800 ${
              gender === "male" ? "before:block" : "before:hidden"
            }`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
          <button
            className={`px-10 py-3 border border-stone-700 rounded-3xl relative before:content-[""] before:absolute before:size-3 before:rounded-full before:bg-secondary before:left-3 before:inset-y-[18px] hover:border-stone-700 hover:bg-stone-800 before:duration-300 ${
              gender === "female" ? "before:block" : "before:hidden"
            }`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
        </div>
        <div className='mt-10 center-all flex-col gap-3'>
          <label htmlFor='count'>
            How many chapters do you usually read per day?
          </label>
          <input
            id='count'
            type='number'
            className='rounded-3xl py-4 px-5 w-full bg-stone-900 border outline-none focus:border-stone-600 border-stone-800 mb-5'
          />
        </div>
        <button
          className='w-full mt-5 rounded-3xl border-2 border-primary bg-primary hover:bg-primary-shade hover:border-primary-shade py-3 font-semibold'
          onClick={() => navigate("/")}
        >
          Next
        </button>
      </div>
      <div className='h-[25%] relative'>
        <p className='absolute bottom-5 text-center text-sm w-full'>
          By continuing, you agree to our{" "}
          <span className='text-primary hover:text-primary-shade cursor-pointer hover:underline'>
            Terms of use
          </span>{" "}
          and{" "}
          <span className='text-primary hover:text-primary-shade cursor-pointer hover:underline'>
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}

export default LastThing;
