import Card from '../dashboard/components/Card';
import CardTown from './components/Cardtowm';

const CommunityPage = () => {
  return (
    <div>
      <div className=" flex-col pt-8">
        <div className="mb-3 inline-flex h-7 cursor-pointer items-center justify-start gap-1 rounded-lg px-2 py-1 transition-colors duration-300 hover:bg-black/10">
          <div className="text-sm font-semibold leading-tight text-slate-900">Today</div>
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
              d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <Card title="Community" value="10" indicator="+11.01%" colorType="red" />
          <Card title="Members" value="508" indicator="+9.15%" colorType="gray" />
          <Card title="Monthly sales generated" value="10" indicator="-0.56%" colorType="red" />
        </div>

        <div className="grid grid-cols-4 gap-5 pb-10 pt-8">
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
          <CardTown link="jfhgds" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
