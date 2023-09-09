import CardServiceSecutity from './components/CardServiceSecurity';

const CommunityPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-7 py-5">
      <div className="inline-flex h-7 w-full justify-between gap-1 rounded-lg px-2 py-1">
        <div className="text-xl font-semibold leading-tight text-gray-600">Security services</div>

        <div className="inline-flex h-[33px] w-[65px] cursor-pointer items-start justify-start">
          <div className="flex w-[65px] items-center justify-center gap-[7px] rounded-md bg-neutral-200 px-[9px] py-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.5 2.25C6.5 2.05109 6.42098 1.86032 6.28033 1.71967C6.13968 1.57902 5.94891 1.5 5.75 1.5C5.55109 1.5 5.36032 1.57902 5.21967 1.71967C5.07902 1.86032 5 2.05109 5 2.25V5.5H1.75C1.55109 5.5 1.36032 5.57902 1.21967 5.71967C1.07902 5.86032 1 6.05109 1 6.25C1 6.44891 1.07902 6.63968 1.21967 6.78033C1.36032 6.92098 1.55109 7 1.75 7H5V10.25C5 10.4489 5.07902 10.6397 5.21967 10.7803C5.36032 10.921 5.55109 11 5.75 11C5.94891 11 6.13968 10.921 6.28033 10.7803C6.42098 10.6397 6.5 10.4489 6.5 10.25V7H9.75C9.94891 7 10.1397 6.92098 10.2803 6.78033C10.421 6.63968 10.5 6.44891 10.5 6.25C10.5 6.05109 10.421 5.86032 10.2803 5.71967C10.1397 5.57902 9.94891 5.5 9.75 5.5H6.5V2.25Z"
                fill="#011936"
              />
            </svg>
            <div className="text-sm font-medium uppercase leading-tight text-slate-900">Add</div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 gap-4 overflow-x-auto">
        <CardServiceSecutity />
        <CardServiceSecutity />
        <CardServiceSecutity />
      </div>
    </div>
  );
};

export default CommunityPage;
