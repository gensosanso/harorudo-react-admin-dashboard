import { FC } from 'react';

type Color = 'red' | 'gray';

interface ICardProps {
  title: string;
  value: string;
  indicator: string;
  colorType: Color;
}

const Card: FC<ICardProps> = ({ indicator, title, value, colorType }) => {
  return (
    <div
      className={`relative flex h-28 w-full flex-col rounded-2xl p-5 ${
        colorType === 'red' ? 'bg-rose-600/20' : 'bg-slate-200'
      }`}
    >
      <div className="text-sm font-semibold leading-tight text-slate-900">{title || ''}</div>
      <div className="flex w-full flex-row justify-between pt-2 text-center align-middle">
        <div className=" text-2xl font-semibold leading-9 text-slate-900">{value || '0'}</div>
        <div className=" flex items-center justify-end gap-1 px-4">
          <div className="text-right text-xs font-normal leading-none text-slate-900">
            {indicator}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
              fill="#011936"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
