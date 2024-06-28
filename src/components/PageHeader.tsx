import { useNavigate } from "react-router-dom";

type PageHeaderProps =
  | {
      onBack: () => void;
      replace?: never;
      to?: never;
      suffix?: React.ReactElement;
      title?: React.ReactElement;
    }
  | {
      replace?: boolean;
      to?: string;
      onBack?: never;
      suffix?: React.ReactElement;
      title?: React.ReactElement;
    };

function PageHeader(props: PageHeaderProps) {
  console.log("Props", props);
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center'>
      <div
        className='hover:bg-stone-700 cursor-pointer border rounded-full p-3 border-shade-400'
        onClick={() => {
          if (props?.onBack) {
            return props.onBack();
          } else if (!props.to) {
            return navigate(-1);
          } else {
            return navigate(props.to, { replace: props?.replace });
          }
        }}
      >
        <img
          src='https://img.icons8.com/?size=100&id=100033&format=png&color=ffffff'
          className='size-4'
          alt=''
        />
      </div>
      {props?.title && <p>{props?.title}</p>}
      <div>{props.suffix}</div>
    </div>
  );
}

export default PageHeader;
