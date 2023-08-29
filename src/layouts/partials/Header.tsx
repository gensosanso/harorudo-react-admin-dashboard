import { Fragment, useContext } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '../../common/components/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../common/components/Dropdown';
import { LayoutContext } from '../../common/contexts/LayoutContext';

const Header = () => {
  const { title, breadcrumbs } = useContext(LayoutContext);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 text-[.75rem]">
        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.title}>
            {breadcrumb.link ? (
              <Link to={breadcrumb.link} className="link link-primary">
                {breadcrumb.title}
              </Link>
            ) : (
              breadcrumb.title
            )}

            {index !== breadcrumbs.length - 1 && <FiChevronsRight />}
          </Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">{title}</h2>

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
                </div> */}
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
      </div>
    </div>
  );
};

export default Header;
