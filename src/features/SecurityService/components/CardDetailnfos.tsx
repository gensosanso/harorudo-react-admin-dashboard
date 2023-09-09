import { FC } from 'react';

interface ICardInfosProps {
  title: string;
}

const CardDetailsInfos: FC<ICardInfosProps> = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex h-full w-full flex-col rounded-[30px] bg-gray-200/50">
        <div className=" h-[44.95px]  p-10 text-[32px] font-bold text-slate-900">BA43</div>
        <div className=" flex flex-row gap-3 p-10">
          <div className="flex h-[31.56px] w-[255.32px] gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="30"
              viewBox="0 0 22 30"
              fill="none"
            >
              <path
                d="M10.9823 14.4827C9.98595 14.4827 9.0304 14.1049 8.32587 13.4323C7.62134 12.7597 7.22554 11.8475 7.22554 10.8963C7.22554 9.94518 7.62134 9.03297 8.32587 8.3604C9.0304 7.68783 9.98595 7.30998 10.9823 7.30998C11.9787 7.30998 12.9342 7.68783 13.6387 8.3604C14.3433 9.03297 14.7391 9.94518 14.7391 10.8963C14.7391 11.3673 14.6419 11.8337 14.4531 12.2688C14.2643 12.7039 13.9876 13.0993 13.6387 13.4323C13.2899 13.7653 12.8757 14.0295 12.42 14.2097C11.9642 14.3899 11.4756 14.4827 10.9823 14.4827ZM10.9823 0.854523C8.19251 0.854523 5.51698 1.9125 3.5443 3.7957C1.57162 5.67891 0.463379 8.23309 0.463379 10.8963C0.463379 18.4277 10.9823 29.5454 10.9823 29.5454C10.9823 29.5454 21.5012 18.4277 21.5012 10.8963C21.5012 8.23309 20.393 5.67891 18.4203 3.7957C16.4476 1.9125 13.7721 0.854523 10.9823 0.854523Z"
                fill="#ED254E"
              />
            </svg>
            <div className=" h-[26.78px] w-[222.81px] text-[15px] font-medium text-zinc-500">
              Carrefour Lycée de Makepe, Douala, Cameroun
            </div>
          </div>
          <div className="flex h-[31.56px] w-[255.32px] gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.9496 4.46179H4.64935C3.59746 4.46179 2.74638 5.32252 2.74638 6.37452L2.73682 17.8509C2.73682 18.9029 3.59746 19.7636 4.64935 19.7636H19.9496C21.0015 19.7636 21.8621 18.9029 21.8621 17.8509V6.37452C21.8621 5.32252 21.0015 4.46179 19.9496 4.46179ZM19.5671 8.52634L12.8063 12.7535C12.5003 12.9447 12.0987 12.9447 11.7927 12.7535L5.03186 8.52634C4.93597 8.4725 4.852 8.39977 4.78503 8.31255C4.71806 8.22532 4.66949 8.12541 4.64225 8.01886C4.61501 7.91232 4.60967 7.80135 4.62655 7.69268C4.64343 7.58401 4.68218 7.4799 4.74046 7.38664C4.79874 7.29338 4.87534 7.21292 4.96561 7.15013C5.05588 7.08733 5.15796 7.04351 5.26566 7.02131C5.37336 6.99911 5.48444 6.99899 5.59218 7.02097C5.69993 7.04295 5.80209 7.08656 5.89249 7.14917L12.2995 11.1563L18.7065 7.14917C18.7969 7.08656 18.899 7.04295 19.0068 7.02097C19.1145 6.99899 19.2256 6.99911 19.3333 7.02131C19.441 7.04351 19.5431 7.08733 19.6333 7.15013C19.7236 7.21292 19.8002 7.29338 19.8585 7.38664C19.9168 7.4799 19.9555 7.58401 19.9724 7.69268C19.9893 7.80135 19.9839 7.91232 19.9567 8.01886C19.9295 8.12541 19.8809 8.22532 19.8139 8.31255C19.747 8.39977 19.663 8.4725 19.5671 8.52634Z"
                fill="#ED254E"
              />
            </svg>
            <div className=" h-[26.78px] w-[222.81px] text-[15px] font-medium text-zinc-500">
              debra.holt@example.com
            </div>
          </div>
          <div className="flex h-[31.56px] w-[255.32px] gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <path
                d="M19.4569 21.3536L21.5989 19.2113C21.8874 18.9264 22.2525 18.7313 22.6497 18.6498C23.0469 18.5684 23.4592 18.6039 23.8366 18.7523L26.4472 19.7947C26.8286 19.9495 27.1556 20.2138 27.387 20.5542C27.6184 20.8946 27.744 21.2958 27.7477 21.7075V26.4893C27.7455 26.7693 27.6866 27.0459 27.5747 27.3026C27.4628 27.5592 27.3 27.7906 27.0963 27.9827C26.8926 28.1748 26.6522 28.3237 26.3894 28.4204C26.1267 28.5171 25.8471 28.5597 25.5674 28.5455C7.27407 27.4074 3.58288 11.9143 2.88481 5.98484C2.8524 5.69366 2.88201 5.39892 2.97168 5.12001C3.06135 4.84109 3.20906 4.58433 3.40508 4.36661C3.6011 4.14889 3.84099 3.97514 4.10898 3.8568C4.37696 3.73846 4.66696 3.6782 4.9599 3.68H9.57867C9.99083 3.68122 10.3932 3.80573 10.734 4.03752C11.0749 4.2693 11.3385 4.59777 11.4912 4.98066L12.5335 7.59153C12.6868 7.96745 12.7259 8.38019 12.6459 8.7782C12.566 9.1762 12.3706 9.54184 12.0841 9.82942L9.94205 11.9717C9.94205 11.9717 11.1756 20.3207 19.4569 21.3536Z"
                fill="#ED254E"
              />
            </svg>
            <div className=" h-[26.78px] w-[222.81px] text-[15px] font-medium text-zinc-500">
              698564478 / 678549659
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-4 gap-3  p-10 pt-3">
          <div className="flex flex-col gap-4 border-r-[0.10rem] border-gray-200">
            <div className=" h-[24.56px] w-[155.28px] text-xl font-medium text-slate-900">
              Total Members
            </div>
            <div className=" h-[39.91px] w-[63.34px] text-2xl font-bold text-slate-900">509</div>
          </div>
          <div className="flex flex-col gap-4 border-r-[0.10rem] border-gray-200">
            <div className=" h-[24.56px]  text-xl font-medium text-slate-900">Active Members</div>
            <div className=" h-[39.91px] w-[63.34px] text-2xl font-bold text-slate-900">509</div>
          </div>
          <div className="flex flex-col gap-4 border-r-[0.10rem] border-gray-200">
            <div className=" h-[24.56px] w-[155.28px] text-xl font-medium text-slate-900">
              Status
            </div>
            <div className=" h-[39.91px] w-[63.34px] text-2xl font-bold text-slate-900">
              <div className="flex w-[102px] items-center justify-center gap-[7px] rounded-md bg-emerald-400 px-[9px] py-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.37179 6.45809C4.56705 6.24519 4.88363 6.24519 5.0789 6.45809L8.37179 10.0484C8.56705 10.2613 8.88363 10.2613 9.0789 10.0484L12.3718 6.45809C12.5671 6.24519 12.8836 6.24519 13.0789 6.45809C13.2742 6.67099 13.2742 7.01617 13.0789 7.22907L9.786 10.8194C9.20022 11.4581 8.25047 11.4581 7.66468 10.8194L4.37179 7.22907C4.17653 7.01617 4.17653 6.67099 4.37179 6.45809Z"
                    fill="#011936"
                  />
                </svg>
                <div className="text-sm font-medium uppercase leading-tight text-slate-900">
                  Enabled
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className=" h-[24.56px]  text-xl font-medium text-slate-900">Period</div>
            <div className=" flex h-[39.91px]   text-left text-base font-bold capitalize leading-9 text-slate-900">
              2020-02-01 ~ 2020-05-15
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[263px] w-[1137px]">
        <div className=" h-[263px] w-full rounded-[30px] bg-gray-200" />
        <div className="absolute left-[55.46px] top-[24.87px] h-[44.95px] w-[91.80px] text-[32px] font-bold text-slate-900">
          BA43
        </div>
        <div className="absolute left-[55.46px] top-[87.99px] h-[31.56px] w-[255.32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
          >
            <path
              d="M10.9823 14.4827C9.98595 14.4827 9.0304 14.1049 8.32587 13.4323C7.62134 12.7597 7.22554 11.8475 7.22554 10.8963C7.22554 9.94518 7.62134 9.03297 8.32587 8.3604C9.0304 7.68783 9.98595 7.30998 10.9823 7.30998C11.9787 7.30998 12.9342 7.68783 13.6387 8.3604C14.3433 9.03297 14.7391 9.94518 14.7391 10.8963C14.7391 11.3673 14.6419 11.8337 14.4531 12.2688C14.2643 12.7039 13.9876 13.0993 13.6387 13.4323C13.2899 13.7653 12.8757 14.0295 12.42 14.2097C11.9642 14.3899 11.4756 14.4827 10.9823 14.4827ZM10.9823 0.854523C8.19251 0.854523 5.51698 1.9125 3.5443 3.7957C1.57162 5.67891 0.463379 8.23309 0.463379 10.8963C0.463379 18.4277 10.9823 29.5454 10.9823 29.5454C10.9823 29.5454 21.5012 18.4277 21.5012 10.8963C21.5012 8.23309 20.393 5.67891 18.4203 3.7957C16.4476 1.9125 13.7721 0.854523 10.9823 0.854523Z"
              fill="#ED254E"
            />
          </svg>
          <div className="absolute left-[32.51px] top-0 h-[26.78px] w-[222.81px] text-[15px] font-medium text-zinc-500">
            Carrefour Lycée de Makepe, Douala, Cameroun
          </div>
        </div>
        <div className="absolute left-[331.82px] top-[95.64px] h-[22.95px] w-[258.19px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.9496 4.46179H4.64935C3.59746 4.46179 2.74638 5.32252 2.74638 6.37452L2.73682 17.8509C2.73682 18.9029 3.59746 19.7636 4.64935 19.7636H19.9496C21.0015 19.7636 21.8621 18.9029 21.8621 17.8509V6.37452C21.8621 5.32252 21.0015 4.46179 19.9496 4.46179ZM19.5671 8.52634L12.8063 12.7535C12.5003 12.9447 12.0987 12.9447 11.7927 12.7535L5.03186 8.52634C4.93597 8.4725 4.852 8.39977 4.78503 8.31255C4.71806 8.22532 4.66949 8.12541 4.64225 8.01886C4.61501 7.91232 4.60967 7.80135 4.62655 7.69268C4.64343 7.58401 4.68218 7.4799 4.74046 7.38664C4.79874 7.29338 4.87534 7.21292 4.96561 7.15013C5.05588 7.08733 5.15796 7.04351 5.26566 7.02131C5.37336 6.99911 5.48444 6.99899 5.59218 7.02097C5.69993 7.04295 5.80209 7.08656 5.89249 7.14917L12.2995 11.1563L18.7065 7.14917C18.7969 7.08656 18.899 7.04295 19.0068 7.02097C19.1145 6.99899 19.2256 6.99911 19.3333 7.02131C19.441 7.04351 19.5431 7.08733 19.6333 7.15013C19.7236 7.21292 19.8002 7.29338 19.8585 7.38664C19.9168 7.4799 19.9555 7.58401 19.9724 7.69268C19.9893 7.80135 19.9839 7.91232 19.9567 8.01886C19.9295 8.12541 19.8809 8.22532 19.8139 8.31255C19.747 8.39977 19.663 8.4725 19.5671 8.52634Z"
              fill="#ED254E"
            />
          </svg>
          <div className="absolute left-[35.38px] top-[3.83px] h-[14.35px] w-[222.81px] text-[15px] font-medium text-zinc-500">
            debra.holt@example.com
          </div>
        </div>
        <div className="absolute left-[590.02px] top-[91.81px] h-[30.60px] w-[258.19px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <path
              d="M19.4569 21.3536L21.5989 19.2113C21.8874 18.9264 22.2525 18.7313 22.6497 18.6498C23.0469 18.5684 23.4592 18.6039 23.8366 18.7523L26.4472 19.7947C26.8286 19.9495 27.1556 20.2138 27.387 20.5542C27.6184 20.8946 27.744 21.2958 27.7477 21.7075V26.4893C27.7455 26.7693 27.6866 27.0459 27.5747 27.3026C27.4628 27.5592 27.3 27.7906 27.0963 27.9827C26.8926 28.1748 26.6522 28.3237 26.3894 28.4204C26.1267 28.5171 25.8471 28.5597 25.5674 28.5455C7.27407 27.4074 3.58288 11.9143 2.88481 5.98484C2.8524 5.69366 2.88201 5.39892 2.97168 5.12001C3.06135 4.84109 3.20906 4.58433 3.40508 4.36661C3.6011 4.14889 3.84099 3.97514 4.10898 3.8568C4.37696 3.73846 4.66696 3.6782 4.9599 3.68H9.57867C9.99083 3.68122 10.3932 3.80573 10.734 4.03752C11.0749 4.2693 11.3385 4.59777 11.4912 4.98066L12.5335 7.59153C12.6868 7.96745 12.7259 8.38019 12.6459 8.7782C12.566 9.1762 12.3706 9.54184 12.0841 9.82942L9.94205 11.9717C9.94205 11.9717 11.1756 20.3207 19.4569 21.3536Z"
              fill="#ED254E"
            />
          </svg>
          <div className="absolute left-[35.38px] top-[7.65px] h-[14.35px] w-[222.81px] text-[15px] font-medium text-zinc-500">
            698564478 / 678549659
          </div>
        </div>

        <div className="absolute left-[57.38px] top-[145.30px] h-[87.10px] w-[217.07px] border-r-[0.10rem] border-gray-300">
          <div className="absolute left-0 top-0 h-[24.56px] w-[155.28px] text-xl font-medium text-slate-900">
            Total Members
          </div>
          <div className="absolute left-0 top-[38.25px] h-[39.91px] w-[63.34px] text-2xl font-bold text-slate-900">
            509
          </div>
        </div>
        <div className="absolute left-[305.05px] top-[146.26px] h-[87.10px] w-[217.07px] border-r-[0.10rem] border-gray-300">
          <div className="absolute left-0 top-0 h-[24.56px] w-[169.58px] text-xl font-medium text-slate-900">
            Active Members
          </div>
          <div className="absolute left-[-0px] top-[38.25px] h-[39.91px] w-[63.34px] text-2xl font-bold text-slate-900">
            509
          </div>
        </div>
        <div className="absolute left-[552.67px] top-[145.30px] h-[87.10px] w-[182.86px] border-r-[0.10rem] border-gray-300">
          <div className="absolute left-[0.06px] top-0 h-[24.56px] w-[66.69px] text-xl font-medium text-slate-900">
            Status
          </div>
          <div className="absolute left-[0.06px] top-[42px] inline-flex h-[33.77px] w-[104.64px] items-start justify-start">
            <div className="flex w-[102px] items-center justify-center gap-[7px] rounded-md bg-emerald-400 px-[9px] py-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.37179 6.45809C4.56705 6.24519 4.88363 6.24519 5.0789 6.45809L8.37179 10.0484C8.56705 10.2613 8.88363 10.2613 9.0789 10.0484L12.3718 6.45809C12.5671 6.24519 12.8836 6.24519 13.0789 6.45809C13.2742 6.67099 13.2742 7.01617 13.0789 7.22907L9.786 10.8194C9.20022 11.4581 8.25047 11.4581 7.66468 10.8194L4.37179 7.22907C4.17653 7.01617 4.17653 6.67099 4.37179 6.45809Z"
                  fill="#011936"
                />
              </svg>
              <div className="text-sm font-medium uppercase leading-tight text-slate-900">
                Enabled
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[755.45px] top-[146.26px] h-[87.10px] w-[251.81px]">
          <div className="absolute left-0 top-[1.02px] h-[86.07px] w-[217.07px] bg-gray-200" />
          <div className="absolute left-0 top-0 h-[24.56px] w-[68.44px] text-xl font-medium text-slate-900">
            Period
          </div>
          <div className="absolute left-[0.51px] top-[44.09px] h-[30.70px] w-[251.30px] text-center text-xl font-bold capitalize leading-9 text-slate-900">
            2020-02-01 ~ 2020-05-15
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardDetailsInfos;
