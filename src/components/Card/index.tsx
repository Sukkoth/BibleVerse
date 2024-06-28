type Props = {
  bgColor: string;
  children: React.ReactNode;
  bgScrambled?: boolean;
};

function Card({ bgColor, children, bgScrambled = false }: Props) {
  return (
    <div
      style={{
        backgroundImage: bgScrambled ? "url('/svgs/cardsvg.svg')" : undefined,
      }}
      className={`w-full ${bgColor} p-7 rounded-3xl`}
    >
      {children}
    </div>
  );
}

function CheckNow() {
  return (
    <div className='flex items-center gap-2 w-fit pe-2 cursor-pointer'>
      <img src='/images/play-btn.png' className='size-10' />
      <p className='text-[#0FD2FF] font-medium text-sm'>Check Now</p>
    </div>
  );
}

Card.CheckNow = CheckNow;
export default Card;
