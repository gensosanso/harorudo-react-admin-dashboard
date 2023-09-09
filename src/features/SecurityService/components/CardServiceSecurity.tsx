const CardServiceSecutity = () => {
  return (
    <div className="inline-flex h-[185.50px] w-full items-center justify-end rounded-[20px] bg-zinc-300/50 pb-[24.50px] pl-[22px] pr-[17.12px] pt-[26px]">
      <div className="relative h-[135px] w-fit">
        <div className="grid-row-2 grid h-[53.86px] w-[239px]">
          <div className="flex w-full flex-col">
            <div className="w-[155px] text-2xl font-semibold leading-9 text-slate-900">
              G4S Security
            </div>
            <div className="-mt-3 h-[20.29px] w-[199.61px] ">
              <span className="text-[10px] font-normal leading-9 text-gray-600">
                Creation date :{' '}
              </span>
              <span className="text-[10px] font-semibold leading-9 text-gray-600">
                15 May 2020 6:00 pm
              </span>
            </div>
          </div>

          <div className="absolute left-[186px] top-0 h-[53px] w-[53px]">
            <div className="absolute left-0 top-0 h-[53px] w-[53px] rounded-full bg-white" />
            <img
              className="absolute left-[8.46px] top-[12.97px] h-[27.63px] w-[36.65px]"
              src="https://cdn.worldvectorlogo.com/logos/g4s-logo-.svg"
              alt="g4s"
            />
          </div>
        </div>

        <div className="absolute left-[2px] top-[91px] h-3.5  text-sm">
          <span className="text-[10px] font-normal leading-9 text-gray-600">Alert reported: </span>
          <span className="text-[10px] font-semibold leading-9 text-gray-600">10</span>
        </div>
        <div className="absolute left-[1.21px] top-[112.14px] my-2 h-[3px] w-[231.69px] overflow-hidden rounded-full bg-gray-600">
          <div className=" absolute h-[3px] w-[50%] overflow-hidden rounded-full bg-red-600" />
        </div>
        <div className="absolute left-0 top-[119px] h-4 w-[234.12px]">
          <div className=" h-4 w-[100px] text-[9px] font-normal leading-9 text-gray-600">
            number of operations:
          </div>
          <div className="absolute left-[106px] top-0 h-4 w-[31px] text-[9px] font-semibold leading-9 text-gray-600">
            07
          </div>
          <div className="absolute left-[213.50px] top-[2.86px] h-[10.93px] w-[20.62px] text-[9px] font-semibold leading-9 text-rose-600">
            75%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServiceSecutity;
