import { FC } from 'react';
import CardDetailsInfos from './components/CardDetailnfos';
import CardServiceSecutity from './components/CardServiceSecurity';

interface IDetailsComunityProps {
  title?: string;
}

const DetailsComunity: FC<IDetailsComunityProps> = () => {
  return (
    <div className="flex w-full flex-col gap-7 py-5">
      <CardDetailsInfos title="gfddg" />
      <div className="inline-flex h-7 w-48 items-center justify-start gap-1 rounded-lg px-2 py-1">
        <div className="text-xl font-semibold leading-tight text-gray-600">Security services</div>
      </div>
      <div className="grid w-full grid-cols-4 gap-4 overflow-x-auto">
        <CardServiceSecutity title="cdlsknfs" />
        <CardServiceSecutity title="cdlsknfs" />
        <CardServiceSecutity title="cdlsknfs" />
      </div>
      <div className="inline-flex h-7 w-full items-center justify-start gap-1 rounded-lg px-2 py-1">
        <div className="text-xl font-semibold leading-tight text-gray-600">Community Members</div>
      </div>
    </div>
  );
};

export default DetailsComunity;
