import { FC } from 'react';

const Notification: FC = () => {
  return (
    <div className=" inline-flex h-screen min-h-[100vh] w-[280px] flex-col items-start justify-start gap-6 border-l border-black/10  bg-white px-5 py-[22px]">
      {' '}
      <div className="flex h-[248px] flex-col items-start justify-start gap-3 self-stretch">
        <div className="inline-flex h-7 items-center justify-start self-stretch pl-1">
          <div className="text-sm font-semibold leading-tight text-slate-900">Notifications</div>
        </div>
        <div className="mr-5 flex h-52 flex-col items-start justify-start gap-2 self-stretch">
          <div className=" inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1 transition-colors duration-300 hover:bg-black/5">
            <div className="flex h-6 w-6 items-start justify-start rounded-lg bg-sky-100">
              <div className="flex shrink grow basis-0 items-center justify-center gap-1 self-stretch rounded-lg bg-sky-100 p-1">
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
                    d="M3 6.5C3 6.5 3 5.48308 3.39313 4.55362C3.39313 4.55362 3.77269 3.65624 4.46447 2.96447C4.46447 2.96447 5.15624 2.27269 6.05362 1.89313C6.05362 1.89313 6.98308 1.5 8 1.5C8 1.5 9.01691 1.5 9.94638 1.89313C9.94638 1.89313 10.8438 2.27269 11.5355 2.96447C11.5355 2.96447 12.2273 3.65624 12.6069 4.55362C12.6069 4.55362 13 5.48309 13 6.5V9.5C13 9.5 13 10.5169 12.6069 11.4464C12.6069 11.4464 12.2273 12.3438 11.5355 13.0355C11.5355 13.0355 10.8438 13.7273 9.94638 14.1069C9.94638 14.1069 9.01691 14.5 8 14.5C8 14.5 6.98308 14.5 6.05362 14.1069C6.05362 14.1069 5.15624 13.7273 4.46447 13.0355C4.46447 13.0355 3.77269 12.3438 3.39313 11.4464C3.39313 11.4464 3 10.5169 3 9.5V6.5ZM4 6.5V9.5C4 9.5 4 11.1569 5.17157 12.3284C5.17157 12.3284 6.34315 13.5 8 13.5C8 13.5 9.65685 13.5 10.8284 12.3284C10.8284 12.3284 12 11.1569 12 9.5V6.5C12 6.5 12 4.84315 10.8284 3.67157C10.8284 3.67157 9.65685 2.5 8 2.5C8 2.5 6.34315 2.5 5.17157 3.67157C5.17157 3.67157 4 4.84315 4 6.5Z"
                    fill="#011936"
                  />
                  <path
                    d="M12.5 9H14C14.2761 9 14.5 8.77614 14.5 8.5C14.5 8.22386 14.2761 8 14 8H12.5C12.2239 8 12 8.22386 12 8.5C12 8.77614 12.2239 9 12.5 9Z"
                    fill="#011936"
                  />
                  <path
                    d="M2 9H3.5C3.77614 9 4 8.77614 4 8.5C4 8.22386 3.77614 8 3.5 8H2C1.72386 8 1.5 8.22386 1.5 8.5C1.5 8.77614 1.72386 9 2 9Z"
                    fill="#011936"
                  />
                  <path
                    d="M2 11H3.6125C3.88864 11 4.1125 10.7761 4.1125 10.5C4.1125 10.2239 3.88864 10 3.6125 10H2C1.72386 10 1.5 10.2239 1.5 10.5C1.5 10.7761 1.72386 11 2 11Z"
                    fill="#011936"
                  />
                  <path
                    d="M2 7H14C14.2761 7 14.5 6.77614 14.5 6.5C14.5 6.22386 14.2761 6 14 6H2C1.72386 6 1.5 6.22386 1.5 6.5C1.5 6.77614 1.72386 7 2 7Z"
                    fill="#011936"
                  />
                  <path
                    d="M7.5 8.5V14C7.5 14.2761 7.72386 14.5 8 14.5C8.27614 14.5 8.5 14.2761 8.5 14V8.5C8.5 8.22386 8.27614 8 8 8C7.72386 8 7.5 8.22386 7.5 8.5Z"
                    fill="#011936"
                  />
                  <path
                    d="M12.3875 11H14C14.2762 11 14.5 10.7761 14.5 10.5C14.5 10.2239 14.2762 10 14 10H12.3875C12.1114 10 11.8875 10.2239 11.8875 10.5C11.8875 10.7761 12.1114 11 12.3875 11Z"
                    fill="#011936"
                  />
                  <path
                    d="M3.14945 2.11258L4.63695 3.52508C4.72987 3.61331 4.85311 3.6625 4.98124 3.6625L4.98218 3.6625L4.99417 3.66233C5.12673 3.6589 5.25251 3.60296 5.34382 3.50679C5.43205 3.41388 5.48124 3.29063 5.48124 3.1625L5.48124 3.16156L5.48108 3.14957C5.47765 3.01701 5.4217 2.89124 5.32554 2.79992L3.83804 1.38742C3.74512 1.29919 3.62188 1.25 3.49374 1.25L3.48082 1.25017C3.34825 1.2536 3.22248 1.30954 3.13117 1.40571C3.04294 1.49862 2.99374 1.62187 2.99374 1.75L2.99391 1.76293C2.99734 1.89549 3.05329 2.02126 3.14945 2.11258Z"
                    fill="#011936"
                  />
                  <path
                    d="M12.1495 1.38739L10.6683 2.79364C10.5721 2.88494 10.5161 3.0107 10.5127 3.14327L10.5125 3.15625L10.5126 3.16729C10.5154 3.29156 10.5643 3.41036 10.6499 3.5005C10.7412 3.59668 10.867 3.65264 10.9995 3.65608L11.0125 3.65625L11.0236 3.65613C11.1478 3.65338 11.2666 3.60445 11.3568 3.51886L12.838 2.11261C12.9342 2.02131 12.9902 1.89555 12.9936 1.76298L12.9938 1.75L12.9936 1.73896C12.9909 1.61469 12.942 1.49589 12.8564 1.40575C12.7651 1.30957 12.6393 1.25361 12.5067 1.25017L12.4938 1.25L12.4827 1.25012C12.3584 1.25287 12.2397 1.3018 12.1495 1.38739Z"
                    fill="#011936"
                  />
                </svg>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="line-clamp-1 h-5 self-stretch text-sm font-normal leading-tight text-slate-900">
                You have a bug that needs to be fixed.
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                Just now
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1 transition-colors duration-300 hover:bg-black/5">
            <div className="flex h-6 w-6 items-center justify-start rounded-lg bg-slate-200">
              <div className="flex shrink grow basis-0 items-center justify-center gap-1 self-stretch rounded-lg bg-slate-200 p-1">
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
                    d="M8 1.5C8 1.5 8.91519 1.5 9.75176 1.85384C9.75176 1.85384 10.5594 2.19544 11.182 2.81802C11.182 2.81802 11.8046 3.4406 12.1462 4.24824C12.1462 4.24824 12.5 5.08481 12.5 6C12.5 6 12.5 6.91519 12.1462 7.75176C12.1462 7.75176 11.8046 8.55941 11.182 9.18198C11.182 9.18198 10.5594 9.80456 9.75176 10.1462C9.75176 10.1462 8.91519 10.5 8 10.5C8 10.5 7.08481 10.5 6.24824 10.1462C6.24824 10.1462 5.4406 9.80456 4.81802 9.18198C4.81802 9.18198 4.19545 8.55941 3.85384 7.75176C3.85384 7.75176 3.5 6.91519 3.5 6C3.5 6 3.5 5.08481 3.85384 4.24824C3.85384 4.24824 4.19544 3.44059 4.81802 2.81802C4.81802 2.81802 5.4406 2.19544 6.24824 1.85384C6.24824 1.85384 7.08481 1.5 8 1.5ZM8 2.5C8 2.5 6.55025 2.5 5.52513 3.52513C5.52513 3.52513 4.5 4.55025 4.5 6C4.5 6 4.5 7.44975 5.52513 8.47487C5.52513 8.47487 6.55025 9.5 8 9.5C8 9.5 9.44975 9.5 10.4749 8.47487C10.4749 8.47487 11.5 7.44975 11.5 6C11.5 6 11.5 4.55025 10.4749 3.52513C10.4749 3.52513 9.44975 2.5 8 2.5Z"
                    fill="#011936"
                  />
                  <path
                    d="M11.2503 11.3704C12.7587 12.2414 13.6295 13.75 13.6295 13.75C13.6958 13.8648 13.805 13.9486 13.933 13.983C13.9753 13.9943 14.0188 14 14.0625 14C14.0677 14 14.073 13.9999 14.0782 13.9998C14.1606 13.9972 14.2411 13.9743 14.3125 13.933C14.4672 13.8437 14.5625 13.6787 14.5625 13.5C14.5625 13.4923 14.5623 13.4846 14.562 13.4769C14.5583 13.397 14.5355 13.3193 14.4955 13.25C13.4908 11.5094 11.7503 10.5044 11.7503 10.5044C10.0098 9.49945 8 9.49945 8 9.49945C5.9902 9.49945 4.2497 10.5044 4.2497 10.5044C2.50934 11.5093 1.50462 13.2498 1.50462 13.2498C1.46075 13.3258 1.4375 13.4123 1.4375 13.5L1.43758 13.5091C1.43832 13.5497 1.44402 13.5902 1.45455 13.6295C1.48888 13.7576 1.57269 13.8668 1.68754 13.933C1.76354 13.9769 1.84975 14 1.9375 14C1.94675 14 1.95601 13.9998 1.96525 13.9992C2.13375 13.9899 2.28617 13.8961 2.37054 13.75C3.24131 12.2414 4.74974 11.3704 4.74974 11.3704C6.25817 10.4995 8 10.4995 8 10.4995C9.74183 10.4995 11.2503 11.3704 11.2503 11.3704Z"
                    fill="#011936"
                  />
                </svg>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="h-5 self-stretch text-sm font-normal leading-tight text-slate-900">
                New user registered
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                59 minutes ago
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1 transition-colors duration-300 hover:bg-black/5">
            <div className="flex h-6 w-6 items-center justify-start rounded-lg bg-sky-100">
              <div className="flex shrink grow basis-0 items-center justify-center gap-1 self-stretch rounded-lg bg-sky-100 p-1">
                <div className="relative h-4 w-4" />
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="line-clamp-1 h-5 self-stretch text-sm font-normal leading-tight text-slate-900">
                You have a bug that needs to be fixed.
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1 transition-colors duration-300 hover:bg-black/5">
            <div className="flex h-6 w-6 items-center justify-start rounded-lg bg-slate-200">
              <div className="flex shrink grow basis-0 items-center justify-center gap-1 self-stretch rounded-lg bg-slate-200 p-1">
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
                    d="M8 5.5C8 5.5 9.03553 5.5 9.76777 6.23223C9.76777 6.23223 10.5 6.96447 10.5 8C10.5 8 10.5 9.03553 9.76777 9.76777C9.76777 9.76777 9.03553 10.5 8 10.5C8 10.5 6.96447 10.5 6.23223 9.76777C6.23223 9.76777 5.5 9.03553 5.5 8C5.5 8 5.5 6.96447 6.23223 6.23223C6.23223 6.23223 6.96447 5.5 8 5.5ZM8 6.5C8 6.5 7.37868 6.5 6.93934 6.93934C6.93934 6.93934 6.5 7.37868 6.5 8C6.5 8 6.5 8.62132 6.93934 9.06066C6.93934 9.06066 7.37868 9.5 8 9.5C8 9.5 8.62132 9.5 9.06066 9.06066C9.06066 9.06066 9.5 8.62132 9.5 8C9.5 8 9.5 7.37868 9.06066 6.93934C9.06066 6.93934 8.62132 6.5 8 6.5Z"
                    fill="#011936"
                  />
                  <path
                    d="M5.1721 5.17247C5.26587 5.07871 5.31875 4.95133 5.31875 4.81873C5.31875 4.68621 5.26614 4.55912 5.1725 4.46537C5.07873 4.3716 4.95135 4.31873 4.81875 4.31873C4.68623 4.31873 4.55914 4.37133 4.46539 4.46498C3.77412 5.15549 3.39535 6.05614 3.39535 6.05614C2.99988 6.98687 2.99988 7.99998 2.99988 7.99998C2.99988 9.01308 3.39606 9.94551 3.39606 9.94551C3.77412 10.8445 4.46539 11.535 4.46539 11.535C4.55914 11.6286 4.68623 11.6812 4.81875 11.6812C4.95135 11.6812 5.07878 11.6284 5.17249 11.5346C5.26614 11.4408 5.31875 11.3137 5.31875 11.1812C5.31867 11.0486 5.26592 10.9212 5.1721 10.8275C4.61978 10.2758 4.31643 9.55444 4.31643 9.55444C3.99988 8.80944 3.99988 7.99998 3.99988 7.99998C3.99988 7.19051 4.31715 6.44381 4.31715 6.44381C4.61978 5.72419 5.1721 5.17247 5.1721 5.17247Z"
                    fill="#011936"
                  />
                  <path
                    d="M11.5348 4.46517C12.2259 5.15561 12.6039 6.05444 12.6039 6.05444C13.0001 6.98687 13.0001 7.99998 13.0001 7.99998C13.0001 9.01308 12.6046 9.94381 12.6046 9.94381C12.2259 10.8445 11.5346 11.535 11.5346 11.535C11.4471 11.6224 11.3303 11.6742 11.2068 11.6806C11.1983 11.681 11.1898 11.6812 11.1812 11.6812C11.0485 11.6812 10.9213 11.6285 10.8275 11.5346C10.7396 11.4466 10.6877 11.3291 10.6818 11.205C10.6814 11.1971 10.6812 11.1891 10.6812 11.1812C10.6813 11.0486 10.7341 10.9212 10.8279 10.8275C11.3802 10.2758 11.6828 9.55614 11.6828 9.55614C12.0001 8.80944 12.0001 7.99998 12.0001 7.99998C12.0001 7.19051 11.6836 6.44551 11.6836 6.44551C11.3802 5.72419 10.8279 5.17247 10.8279 5.17247C10.734 5.07869 10.6812 4.95143 10.6812 4.81873C10.6812 4.68724 10.733 4.56104 10.8254 4.46747L10.8275 4.46537C10.9103 4.38246 11.0196 4.33128 11.1363 4.32075C11.1512 4.31941 11.1661 4.31873 11.181 4.31873C11.3113 4.31873 11.4368 4.36964 11.5302 4.46063L11.5348 4.46517Z"
                    fill="#011936"
                  />
                  <path
                    d="M3.40354 3.4036L3.40582 3.40131C3.49819 3.30773 3.54999 3.18154 3.54999 3.05005C3.54999 2.91728 3.49718 2.78997 3.40322 2.69617L3.39893 2.69195C3.30557 2.60097 3.18035 2.55005 3.04999 2.55005C3.03514 2.55006 3.01985 2.55074 3.00506 2.55207C2.88829 2.56261 2.77894 2.61384 2.69611 2.69682C1.66241 3.73252 1.08982 5.07948 1.08982 5.07948C0.499939 6.48111 0.499939 8.00005 0.499939 8.00005C0.499939 9.51899 1.08914 10.919 1.08914 10.919C1.66223 12.2675 2.69611 13.3033 2.69611 13.3033C2.78979 13.3971 2.91692 13.4499 3.04953 13.45C3.05738 13.45 3.0657 13.4499 3.07355 13.4495C3.19771 13.4436 3.31524 13.3917 3.40322 13.3039C3.49718 13.2101 3.54999 13.0828 3.54999 12.9501C3.54999 12.9416 3.54977 12.9331 3.54934 12.9246C3.54306 12.8011 3.49123 12.6843 3.40387 12.5968C2.50681 11.6981 2.01084 10.5311 2.01084 10.5311C1.49994 9.31714 1.49994 8.00005 1.49994 8.00005C1.49994 6.68296 2.01015 5.47062 2.01015 5.47062C2.50672 4.30219 3.40354 3.4036 3.40354 3.4036Z"
                    fill="#011936"
                  />
                  <path
                    d="M13.3042 2.69713L13.3036 2.6965C13.2099 2.60284 13.0829 2.55017 12.9505 2.55005C12.818 2.55005 12.6905 2.6026 12.5968 2.69617C12.503 2.78994 12.45 2.91744 12.45 3.05005C12.45 3.1825 12.5026 3.30954 12.5961 3.40328C13.4932 4.30198 13.9892 5.469 13.9892 5.469C14.5001 6.68296 14.5001 8.00005 14.5001 8.00005C14.5001 9.31714 13.9898 10.5295 13.9898 10.5295C13.4932 11.6981 12.5961 12.5968 12.5961 12.5968C12.5026 12.6906 12.45 12.8176 12.45 12.95C12.4501 13.0827 12.5029 13.2102 12.5968 13.3039C12.6905 13.3975 12.8176 13.45 12.95 13.45C13.0826 13.4499 13.2102 13.3971 13.3039 13.3033C14.3378 12.2675 14.9102 10.9206 14.9102 10.9206C15.5001 9.51899 15.5001 8.00005 15.5001 8.00005C15.5001 6.48111 14.9109 5.0811 14.9109 5.0811C14.3379 3.7328 13.3042 2.69713 13.3042 2.69713Z"
                    fill="#011936"
                  />
                </svg>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="h-5 self-stretch text-sm font-normal leading-tight text-slate-900">
                Andi Lane subscribed to you
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                Today, 11:59 AM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[302px] flex-col items-start justify-start gap-3 self-stretch">
        <div className="inline-flex h-7 items-center justify-start self-stretch pl-1">
          <div className="text-sm font-semibold leading-tight text-slate-900">Activities</div>
        </div>
        <div className="flex h-[262px] flex-col items-start justify-start gap-2 self-stretch">
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1">
            <div className="flex flex-col gap-3">
              <img
                className="relative h-6 w-6 rounded-full"
                src="https://via.placeholder.com/24x24"
                alt="dfds"
              />
              <div className=" mx-auto h-[0px] w-3.5 rotate-90 items-start justify-start border border-black/10 " />
            </div>

            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="line-clamp-1 self-stretch text-sm font-normal leading-tight text-slate-900">
                Edited the details of Project X
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                Just now
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1">
            <div className="flex flex-col gap-3">
              <img
                className="relative h-6 w-6 rounded-full"
                src="https://via.placeholder.com/24x24"
                alt="dfds"
              />
              <div className=" albosult mx-auto h-[0px] w-3.5 rotate-90 items-start justify-start border border-black/10" />
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="self-stretch text-sm font-normal leading-tight text-slate-900">
                Released a new version
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                59 minutes ago
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1">
            <div className="flex flex-col gap-3">
              <img
                className="relative h-6 w-6 rounded-full"
                src="https://via.placeholder.com/24x24"
                alt="dfds"
              />
              <div className=" mx-auto h-[0px] w-3.5 rotate-90 items-start justify-start border border-black/10" />
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="self-stretch text-sm font-normal leading-tight text-slate-900">
                Submitted a bug
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                12 hours ago
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1">
            <div className="flex flex-col gap-3">
              <img
                className="relative h-6 w-6 rounded-full"
                src="https://via.placeholder.com/24x24"
                alt="dfds"
              />
              <div className="  mx-auto h-[0px] w-3.5 rotate-90 items-start justify-start border border-black border-opacity-10" />
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="self-stretch text-sm font-normal leading-tight text-slate-900">
                Modified A data in Page X
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                Today, 11:59 AM
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start justify-start gap-2 self-stretch rounded-lg p-1">
            <img
              className="relative h-6 w-6 rounded-[800px]"
              src="https://via.placeholder.com/24x24"
              alt="fdjlf"
            />
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
              <div className="self-stretch text-sm font-normal leading-tight text-slate-900">
                Deleted a page in Project X
              </div>
              <div className="self-stretch text-xs font-normal leading-[18px] text-black text-opacity-40">
                Feb 2, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
