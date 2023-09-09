import { Bell, History, SunDim } from 'lucide-react';
// import { LayoutContext } from '../../common/contexts/LayoutContext';

const Header = () => {
  // const { title, breadcrumbs } = useContext(LayoutContext);

  return (
    <div className=" flex h-16 w-full justify-between border-b border-black/5 bg-white px-6 ">
      <div className="flex items-center gap-3 text-[.75rem]">
        {/* {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.title}>
            {breadcrumb.link ? (
              <Link
                to={breadcrumb.link}
                className="link text-center text-sm font-normal leading-tight text-black text-opacity-40"
              >
                {breadcrumb.title}
              </Link>
            ) : (
              <div className="justify-center text-[#011936]">{breadcrumb.title}</div>
            )}

            {index !== breadcrumbs.length - 1 && '/'}
          </Fragment>
        ))} */}
        <div className="flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1">
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 16.25C2.95921 16.25 2.80029 16.1842 2.68303 16.067C2.56584 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20921 2.56584 4.05029 2.68303 3.93303C2.80029 3.81584 2.95921 3.75 3.125 3.75H6.875V16.25H3.125Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                d="M6.25 3.75V16.25C6.25 16.5952 6.52982 16.875 6.875 16.875C7.22018 16.875 7.5 16.5952 7.5 16.25V3.75C7.5 3.40482 7.22018 3.125 6.875 3.125C6.52982 3.125 6.25 3.40482 6.25 3.75Z"
                fill="#011936"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.875 4.375C1.875 4.375 1.875 3.85723 2.24112 3.49112C2.24112 3.49112 2.60723 3.125 3.125 3.125H16.875C16.875 3.125 17.3928 3.125 17.7589 3.49112C17.7589 3.49112 18.125 3.85723 18.125 4.375V15.625C18.125 15.625 18.125 16.1428 17.7589 16.5089C17.7589 16.5089 17.3928 16.875 16.875 16.875H3.125C3.125 16.875 2.60723 16.875 2.24112 16.5089C2.24112 16.5089 1.875 16.1428 1.875 15.625V4.375ZM3.125 4.375V15.625H16.875V4.375H3.125Z"
                fill="#011936"
              />
              <path
                d="M2.5 6.875H4.375C4.72018 6.875 5 6.59518 5 6.25C5 5.90482 4.72018 5.625 4.375 5.625H2.5C2.15482 5.625 1.875 5.90482 1.875 6.25C1.875 6.59518 2.15482 6.875 2.5 6.875Z"
                fill="#011936"
              />
              <path
                d="M2.5 9.375H4.375C4.72018 9.375 5 9.09518 5 8.75C5 8.40482 4.72018 8.125 4.375 8.125H2.5C2.15482 8.125 1.875 8.40482 1.875 8.75C1.875 9.09518 2.15482 9.375 2.5 9.375Z"
                fill="#011936"
              />
              <path
                d="M2.5 11.875H4.375C4.72018 11.875 5 11.5952 5 11.25C5 10.9048 4.72018 10.625 4.375 10.625H2.5C2.15482 10.625 1.875 10.9048 1.875 11.25C1.875 11.5952 2.15482 11.875 2.5 11.875Z"
                fill="#011936"
              />
            </svg>
          </div>
        </div>
        <div className="flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1">
          <div className="relative h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.3438 14.8984L14.2812 17.3984C14.789 17.7187 15.414 17.2422 15.2657 16.6562L14.125 12.1719C14.0942 12.0475 14.099 11.9171 14.1392 11.7954C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53905C18.3437 8.15625 18.1094 7.38282 17.5078 7.34376L12.8984 7.04686C12.7727 7.03954 12.6517 6.99574 12.5505 6.92082C12.4492 6.8459 12.3719 6.7431 12.3281 6.62499L10.6094 2.29688C10.5639 2.17179 10.481 2.06376 10.372 1.98739C10.263 1.91106 10.1331 1.87009 10 1.87009C9.86687 1.87009 9.73701 1.91106 9.62799 1.98739C9.51897 2.06376 9.43611 2.17179 9.39064 2.29688L7.67189 6.62499C7.6281 6.7431 7.55081 6.8459 7.44949 6.92082C7.34825 6.99574 7.22733 7.03954 7.10159 7.04686L2.49222 7.34376C1.89064 7.38282 1.65627 8.15625 2.11716 8.53905L5.64842 11.4844C5.74715 11.566 5.82077 11.6738 5.86082 11.7954C5.90096 11.9171 5.90584 12.0475 5.87502 12.1719L4.82033 16.3281C4.64066 17.0313 5.39062 17.6016 5.9922 17.2188L9.65622 14.8984C9.75899 14.8331 9.87823 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3438 14.8984Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0084 15.4258C10.0084 15.4258 10.0045 15.4234 9.99999 15.4234C9.99999 15.4234 9.99545 15.4234 9.99161 15.4258L6.32656 17.7468C6.32656 17.7468 5.93669 17.9949 5.48649 17.9634C5.48649 17.9634 5.0722 17.9345 4.73505 17.6782C4.73505 17.6782 4.40211 17.4251 4.25722 17.0356C4.25722 17.0356 4.10144 16.6168 4.21477 16.1734L5.26919 12.0181C5.26919 12.0181 5.27218 12.006 5.26725 11.9911C5.26725 11.9911 5.26231 11.9761 5.25016 11.966L1.71686 9.01902C1.71686 9.01902 1.39721 8.75355 1.29234 8.35551C1.29234 8.35551 1.19651 7.99174 1.30919 7.62769C1.30919 7.62769 1.42313 7.25958 1.71153 7.01581C1.71153 7.01581 2.02898 6.7475 2.45168 6.72005L7.06138 6.42316C7.06138 6.42316 7.07222 6.42251 7.07783 6.41836C7.07783 6.41836 7.08344 6.41421 7.08587 6.40767L7.09099 6.39432L8.80688 2.0734C8.80688 2.0734 8.94483 1.70282 9.26948 1.47546C9.26948 1.47546 9.59841 1.24509 9.99999 1.24509C9.99999 1.24509 10.4016 1.24509 10.7305 1.47546C10.7305 1.47546 11.0552 1.70282 11.1931 2.0734L12.909 6.39432L12.9141 6.40767C12.9141 6.40767 12.9165 6.41421 12.9222 6.41836C12.9222 6.41836 12.9278 6.42251 12.9347 6.42292L17.548 6.72003C17.548 6.72003 17.971 6.7475 18.2885 7.01581C18.2885 7.01581 18.5769 7.25957 18.6908 7.62769C18.6908 7.62769 18.8035 7.99174 18.7076 8.35551C18.7076 8.35551 18.6028 8.75355 18.2821 9.01986L14.7519 11.9643C14.7519 11.9643 14.7377 11.9761 14.7327 11.9911C14.7327 11.9911 14.7278 12.006 14.7316 12.0214L15.8713 16.5022C15.8713 16.5022 15.9731 16.904 15.8312 17.2834C15.8312 17.2834 15.6992 17.6365 15.3968 17.8654C15.3968 17.8654 15.0903 18.0975 14.7131 18.1235C14.7131 18.1235 14.3039 18.1517 13.9478 17.927L10.0092 15.4264L10.0087 15.4261L10.0084 15.4258ZM14.6147 16.8698L10.6792 14.3711L10.6787 14.3708C10.6787 14.3708 10.3681 14.1734 9.99999 14.1734C9.99999 14.1734 9.63168 14.1734 9.32088 14.371L5.6578 16.6907C5.6578 16.6907 5.57273 16.7448 5.4915 16.6831C5.4915 16.6831 5.39368 16.6087 5.42584 16.4829L6.48079 12.3256C6.48079 12.3256 6.57221 11.9572 6.45444 11.5998C6.45444 11.5998 6.33668 11.2425 6.0467 11.0027L2.5175 8.05909C2.5175 8.05909 2.49099 8.03706 2.5033 7.99729C2.5033 7.99729 2.51213 7.96876 2.53268 7.96742L7.14173 7.67057C7.14173 7.67057 7.51638 7.64878 7.82121 7.4233C7.82121 7.4233 8.12271 7.20026 8.25498 6.85003L9.97149 2.52754L9.97797 2.51051C9.97797 2.51051 9.98049 2.50357 9.98655 2.49933C9.98655 2.49933 9.9926 2.49509 9.99999 2.49509C9.99999 2.49509 10.0074 2.49509 10.0134 2.49933C10.0134 2.49933 10.0195 2.50357 10.022 2.51051L10.0285 2.52754L11.745 6.85002C11.745 6.85002 11.8773 7.20026 12.1788 7.4233C12.1788 7.4233 12.4836 7.64878 12.8621 7.67081L17.4676 7.96745C17.4676 7.96745 17.4879 7.96876 17.4967 7.99729C17.4967 7.99729 17.509 8.03706 17.4835 8.05825L13.9512 11.0044C13.9512 11.0044 13.6633 11.2425 13.5455 11.5998C13.5455 11.5998 13.4278 11.9572 13.5184 12.3224L14.6599 16.8103C14.6599 16.8103 14.6695 16.8482 14.6422 16.8689C14.6422 16.8689 14.6291 16.8789 14.6147 16.8698Z"
                fill="#011936"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-44 items-center justify-start gap-1">
          <div className="flex w-24 items-center justify-center gap-1 rounded-lg px-2 py-1">
            <div className="text-center text-sm font-normal leading-tight text-black text-opacity-40">
              Dashboards
            </div>
          </div>
          <div className="text-sm font-normal leading-tight text-black text-opacity-20">/</div>
          <div className="flex w-16 items-center justify-center gap-1 rounded-lg px-2 py-1">
            <div className="text-center text-sm font-normal leading-tight text-slate-900">
              Default
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex h-[2rem] w-40 justify-between gap-1 rounded-lg bg-black/5  p-1 px-1.5">
          <div className="my-auto px-2 text-xs font-normal leading-none text-black text-opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.35 14.3563C14.2567 14.4482 14.131 14.4998 14 14.5C13.8672 14.4994 13.7397 14.448 13.6437 14.3563L10.9437 11.65C9.80661 12.6051 8.34464 13.0844 6.86275 12.9878C5.38085 12.8912 3.99345 12.2263 2.9899 11.1316C1.98635 10.037 1.44414 8.5972 1.47636 7.11251C1.50857 5.62782 2.11272 4.21289 3.1628 3.16281C4.21288 2.11272 5.62781 1.50858 7.1125 1.47636C8.59719 1.44415 10.037 1.98636 11.1316 2.98991C12.2263 3.99346 12.8912 5.38086 12.9878 6.86276C13.0844 8.34465 12.6051 9.80662 11.65 10.9438L14.35 13.6438C14.3972 13.6903 14.4348 13.7457 14.4604 13.8069C14.486 13.8681 14.4992 13.9337 14.4992 14C14.4992 14.0663 14.486 14.132 14.4604 14.1931C14.4348 14.2543 14.3972 14.3097 14.35 14.3563ZM7.25 12C8.18946 12 9.10782 11.7214 9.88896 11.1995C10.6701 10.6776 11.2789 9.9357 11.6384 9.06775C11.9979 8.1998 12.092 7.24474 11.9087 6.32333C11.7254 5.40192 11.2731 4.55555 10.6088 3.89125C9.94446 3.22695 9.09809 2.77456 8.17668 2.59128C7.25527 2.408 6.3002 2.50206 5.43225 2.86158C4.5643 3.22109 3.82245 3.82991 3.30052 4.61105C2.77858 5.39218 2.5 6.31054 2.5 7.25001C2.50165 8.50928 3.00263 9.7165 3.89307 10.6069C4.78351 11.4974 5.99073 11.9984 7.25 12Z"
                fill="black"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <input
            className="ring-none w-full border-none bg-transparent text-sm font-normal leading-tight text-black text-opacity-20 placeholder:text-base placeholder:text-black placeholder:text-opacity-20 focus:outline-none"
            placeholder="search.."
          />

          <div className="text[12px] my-auto h-[17px] w-[18px] px-6 text-xs font-normal leading-[18px]  text-black text-opacity-20">
            ⌘/
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-3 rounded-lg ">
          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <SunDim className=" h-[1.5rem] w-[1.5rem]" />
          </div>
          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <History className=" h-[1rem] w-[1rem]" />
          </div>
          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <Bell className=" h-[1rem] w-[1rem] " />
          </div>

          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-[1rem] w-[1rem]"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.75 16.25C13.5842 16.25 13.4253 16.1842 13.308 16.067C13.1908 15.9497 13.125 15.7908 13.125 15.625V4.375C13.125 4.20921 13.1908 4.05029 13.308 3.93303C13.4253 3.81584 13.5842 3.75 13.75 3.75H17.5V16.25H13.75Z"
                fill="black"
                fillOpacity="0.1"
              />
              <path
                d="M12.5 3.75V16.25C12.5 16.5952 12.7798 16.875 13.125 16.875C13.4702 16.875 13.75 16.5952 13.75 16.25V3.75C13.75 3.40482 13.4702 3.125 13.125 3.125C12.7798 3.125 12.5 3.40482 12.5 3.75Z"
                fill="#011936"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.875 4.375C1.875 4.375 1.875 3.85723 2.24112 3.49112C2.24112 3.49112 2.60723 3.125 3.125 3.125H16.875C16.875 3.125 17.3928 3.125 17.7589 3.49112C17.7589 3.49112 18.125 3.85723 18.125 4.375V15.625C18.125 15.625 18.125 16.1428 17.7589 16.5089C17.7589 16.5089 17.3928 16.875 16.875 16.875H3.125C3.125 16.875 2.60723 16.875 2.24112 16.5089C2.24112 16.5089 1.875 16.1428 1.875 15.625V4.375ZM3.125 4.375V15.625H16.875V4.375H3.125Z"
                fill="#011936"
              />
              <path
                d="M15.625 6.875H17.5C17.8452 6.875 18.125 6.59518 18.125 6.25C18.125 5.90482 17.8452 5.625 17.5 5.625H15.625C15.2798 5.625 15 5.90482 15 6.25C15 6.59518 15.2798 6.875 15.625 6.875Z"
                fill="#011936"
              />
              <path
                d="M15.625 9.375H17.5C17.8452 9.375 18.125 9.09518 18.125 8.75C18.125 8.40482 17.8452 8.125 17.5 8.125H15.625C15.2798 8.125 15 8.40482 15 8.75C15 9.09518 15.2798 9.375 15.625 9.375Z"
                fill="#011936"
              />
              <path
                d="M15.625 11.875H17.5C17.8452 11.875 18.125 11.5952 18.125 11.25C18.125 10.9048 17.8452 10.625 17.5 10.625H15.625C15.2798 10.625 15 10.9048 15 11.25C15 11.5952 15.2798 11.875 15.625 11.875Z"
                fill="#011936"
              />
            </svg>
          </div>
          {/* <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <SunDim className=" h-[28px] w-[28px] " />
          </div>
          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <History className=" h-[28px] w-[28px]" />
          </div>
          <div className="inline-flex h-7 w-7 items-center justify-center gap-1 rounded-lg p-1 text-[#011936] transition-colors duration-300 hover:bg-black/5">
            <History className=" h-[20px] w-[20px]" />
          </div> */}
        </div>

        {/* <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2 rounded-full bg-white p-2 pr-4 text-sm transition duration-200 hover:bg-primary/10">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-px text-left">
                  <div className="text-sm font-medium leading-none text-slate-500">Steven Jobs</div>
                  <div className="text-xs text-slate-400">Joined in April 1976</div>
                  {/* <div className="truncate font-semibold leading-none">Leroy Jenkins</div>
                      <div className="truncate text-xs font-normal leading-none text-muted">
                        Leroy Jenkins
                  </div> 
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="hover:bg-primary/60 hover:text-white">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/70 hover:text-white">
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-primary/70 hover:text-white">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/70 hover:text-white">
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
