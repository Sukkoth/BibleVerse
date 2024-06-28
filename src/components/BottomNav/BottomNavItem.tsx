import { NavLink } from "react-router-dom";

type Props = {
  imageUrl: string;
  to: string;
};

function BottomNavItem({ imageUrl, to }: Props) {
  return (
    <NavLink
      to={to}
      className='size-14 center-all cursor-pointer brightness-50 hover:brightness-100'
    >
      <img src={imageUrl} className='size-8' />
    </NavLink>
  );
}

export default BottomNavItem;
