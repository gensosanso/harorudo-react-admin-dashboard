import { FC } from 'react';
// import { Link } from 'react-router-dom';

interface ICardTown {
  link: string;
}
const CardTown: FC<ICardTown> = () => {
  return (
    // <Link
    //   to={link}
    //   className="inline-flex h-[185.50px] w-fit  items-center justify-center  gap-4 rounded-[20px] bg-zinc-300/50 p-2 "
    // >
    //   <div className="relative h-[137.50px] w-[234.12px]">
    //     <div className="absolute left-0 top-[3.64px] h-[52.21px] w-[201.17px]">
    //       <div className="absolute left-0 top-0 h-[34px] w-[107.60px] text-2xl font-semibold leading-9 text-slate-900">
    //         BA43
    //       </div>
    //       <div className="absolute left-[1.56px] top-[27.93px] h-[24.29px] w-[199.61px]">
    //         <span className="text-[9px] font-normal leading-9 text-gray-600">Creation date</span>
    //         <span className="text-[9px] font-medium leading-9 text-gray-600">:</span>
    //         <span className="text-[9px] font-normal leading-9 text-gray-600"> </span>
    //         <span className="text-[9px] font-semibold leading-9 text-gray-600">
    //           15 May 2020 6:00 pm
    //         </span>
    //       </div>
    //     </div>
    //     <div className="absolute left-[1.21px] top-[114.14px] h-[0px] w-[231.69px]">f</div>
    //     <div className="absolute left-0 top-[80.14px] h-[25.50px] w-[61.87px]">
    //       <img
    //         className="absolute left-0 top-0 h-[25.50px] w-[25.47px] rounded-full"
    //         src="https://via.placeholder.com/25x25"
    //         alt="img"
    //       />
    //       <img
    //         className="absolute left-[18.20px] top-0 h-[25.50px] w-[25.47px] rounded-full"
    //         src="https://via.placeholder.com/25x25"
    //         alt="img"
    //       />
    //       <img
    //         className="absolute left-[36.39px] top-0 h-[25.50px] w-[25.47px] rounded-full"
    //         src="https://via.placeholder.com/25x25"
    //         alt="img"
    //       />
    //     </div>
    //     <div className="absolute left-[195.30px] top-0 h-[55.86px] w-[37.60px]">
    //       <div className="absolute left-[2.87px] top-[31.57px] h-[24.29px] w-[31.54px] text-center text-[9px] font-semibold leading-9 text-gray-600">
    //         Douala
    //       </div>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="absolute left-0 top-0 h-[37.64px] w-[37.60px]"
    //         viewBox="0 0 38 38"
    //         fill="none"
    //       >
    //         <path
    //           d="M19.1022 16.4688C20.4002 16.4688 21.4525 15.4154 21.4525 14.1161C21.4525 12.8167 20.4002 11.7634 19.1022 11.7634C17.8042 11.7634 16.752 12.8167 16.752 14.1161C16.752 15.4154 17.8042 16.4688 19.1022 16.4688Z"
    //           fill="#011936"
    //         />
    //         <path
    //           d="M19.1022 2.35268C12.6228 2.35268 7.35083 7.39991 7.35083 13.6014C7.35083 16.5548 8.69563 20.4823 11.3478 25.2751C13.4777 29.1232 15.9418 32.603 17.2234 34.3344C17.44 34.6302 17.7232 34.8708 18.05 35.0367C18.3768 35.2025 18.738 35.2889 19.1044 35.2889C19.4708 35.2889 19.832 35.2025 20.1588 35.0367C20.4856 34.8708 20.7688 34.6302 20.9853 34.3344C22.2648 32.603 24.7311 29.1232 26.861 25.2751C29.5088 20.4837 30.8536 16.5562 30.8536 13.6014C30.8536 7.39991 25.5816 2.35268 19.1022 2.35268ZM19.1022 18.8214C18.1725 18.8214 17.2637 18.5455 16.4907 18.0284C15.7177 17.5114 15.1152 16.7765 14.7595 15.9167C14.4037 15.0569 14.3106 14.1109 14.492 13.1981C14.6733 12.2854 15.121 11.4469 15.7784 10.7889C16.4358 10.1308 17.2733 9.68268 18.1852 9.50112C19.097 9.31957 20.0421 9.41275 20.901 9.76889C21.7599 10.125 22.494 10.7281 23.0106 11.5019C23.5271 12.2757 23.8027 13.1854 23.8027 14.1161C23.8014 15.3636 23.3057 16.5596 22.4245 17.4418C21.5432 18.3239 20.3484 18.8201 19.1022 18.8214Z"
    //           fill="#ED254E"
    //         />
    //       </svg>
    //     </div>
    //     <div className="absolute left-[177.17px] top-[87.50px] h-3.5 w-14 text-[9px] font-semibold leading-9 text-gray-600">
    //       2k members{' '}
    //     </div>
    //     <div className="absolute left-0 top-[121.43px] h-[16.07px] w-[234.12px]">
    //       <div className="absolute left-0 top-0 h-[15.79px] w-[71.57px] text-[9px] font-normal leading-9 text-gray-600">
    //         active members:
    //       </div>
    //       <div className="absolute left-[80.17px] top-[0.07px] h-4 w-[31px] text-[9px] font-semibold leading-9 text-gray-600">
    //         1.5k
    //       </div>
    //       <div className="absolute left-[213.50px] top-[2.43px] h-[10.93px] w-[20.62px] text-[9px] font-semibold leading-9 text-rose-600">
    //         75%
    //       </div>
    //     </div>
    //   </div>
    // </Link>
    <div className="inline-flex h-[185.50px] w-[278.12px] items-center justify-center rounded-[20px] bg-zinc-300 bg-opacity-50 px-[22px] py-6">
      <div className="relative h-[137.50px] w-[234.12px]">
        <div className="absolute left-0 top-[3.64px] h-[52.21px] w-[201.17px] ">
          <div className="absolute left-0 top-0 h-[34px] w-[107.60px] text-2xl font-semibold leading-9 text-slate-900">
            BA43
          </div>
          <div className="absolute left-[1.56px] top-[27.93px] h-[24.29px] w-[199.61px]">
            <span className="text-[9px] font-normal leading-9 text-gray-600">Creation date</span>
            <span className="text-[9px] font-medium leading-9 text-gray-600">:</span>
            <span className="text-[9px] font-normal leading-9 text-gray-600"> </span>
            <span className="text-[9px] font-semibold leading-9 text-gray-600">
              15 May 2020 6:00 pm
            </span>
          </div>
        </div>
        <div className="absolute left-[1.21px] top-[114.14px] h-[0px] w-[231.69px]" />
        <div className="absolute left-0 top-[80.14px] h-[25.50px] w-[61.87px]">
          <img
            className="absolute left-0 top-0 h-[25.50px] w-[25.47px] rounded-full"
            src="https://via.placeholder.com/25x25"
            alt="img"
          />
          <img
            className="absolute left-[18.20px] top-0 h-[25.50px] w-[25.47px] rounded-full"
            src="https://via.placeholder.com/25x25"
            alt="img"
          />
          <img
            className="absolute left-[36.39px] top-0 h-[25.50px] w-[25.47px] rounded-full"
            src="https://via.placeholder.com/25x25"
            alt="img"
          />
        </div>
        <div className="absolute left-[195.30px] top-0 h-[55.86px] w-[37.60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M19.1022 16.4688C20.4002 16.4688 21.4525 15.4154 21.4525 14.1161C21.4525 12.8167 20.4002 11.7634 19.1022 11.7634C17.8042 11.7634 16.752 12.8167 16.752 14.1161C16.752 15.4154 17.8042 16.4688 19.1022 16.4688Z"
              fill="#011936"
            />
            <path
              d="M19.1022 2.35268C12.6228 2.35268 7.35083 7.39991 7.35083 13.6014C7.35083 16.5548 8.69563 20.4823 11.3478 25.2751C13.4777 29.1232 15.9418 32.603 17.2234 34.3344C17.44 34.6302 17.7232 34.8708 18.05 35.0367C18.3768 35.2025 18.738 35.2889 19.1044 35.2889C19.4708 35.2889 19.832 35.2025 20.1588 35.0367C20.4856 34.8708 20.7688 34.6302 20.9853 34.3344C22.2648 32.603 24.7311 29.1232 26.861 25.2751C29.5088 20.4837 30.8536 16.5562 30.8536 13.6014C30.8536 7.39991 25.5816 2.35268 19.1022 2.35268ZM19.1022 18.8214C18.1725 18.8214 17.2637 18.5455 16.4907 18.0284C15.7177 17.5114 15.1152 16.7765 14.7595 15.9167C14.4037 15.0569 14.3106 14.1109 14.492 13.1981C14.6733 12.2854 15.121 11.4469 15.7784 10.7889C16.4358 10.1308 17.2733 9.68268 18.1852 9.50112C19.097 9.31957 20.0421 9.41275 20.901 9.76889C21.7599 10.125 22.494 10.7281 23.0106 11.5019C23.5271 12.2757 23.8027 13.1854 23.8027 14.1161C23.8014 15.3636 23.3057 16.5596 22.4245 17.4418C21.5432 18.3239 20.3484 18.8201 19.1022 18.8214Z"
              fill="#ED254E"
            />
          </svg>
          <div className="absolute left-[2.87px] top-[31.57px] h-[24.29px] w-[31.54px] text-center text-[9px] font-semibold leading-9 text-gray-600">
            Douala
          </div>
          <div className="absolute left-0 top-0 h-[37.64px] w-[37.60px]" />
        </div>
        <div className="absolute left-[177.17px] top-[87.50px] h-3.5 w-14 text-[9px] font-semibold leading-9 text-gray-600">
          2k members{' '}
        </div>
        <div className="absolute left-[1.21px] top-[112.14px] my-2 h-[3px] w-[231.69px] overflow-hidden rounded-full bg-gray-600">
          <div className=" absolute h-[3px] w-[10%] overflow-hidden rounded-full bg-red-600" />
        </div>

        <div className="absolute left-0 top-[121.43px] h-[16.07px] w-[234.12px]">
          <div className="absolute left-0 top-0 h-[15.79px] w-[71.57px] text-[9px] font-normal leading-9 text-gray-600">
            active members:
          </div>
          <div className="absolute left-[80.17px] top-[0.07px] h-4 w-[31px] text-[9px] font-semibold leading-9 text-gray-600">
            1.5k
          </div>
          <div className="absolute left-[213.50px] top-[2.43px] h-[10.93px] w-[20.62px] text-[9px] font-semibold leading-9 text-rose-600">
            75%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTown;
