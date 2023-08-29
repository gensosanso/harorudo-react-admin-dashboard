import { LayoutTemplate } from 'lucide-react';
import SidebarLink from '../../common/components/SidebarLink';
import ISidebarLink from '../../core/interfaces/sidebar-link.interface';

const links: ISidebarLink[] = [
  {
    links: [
      {
        name: 'Button',
        route: 'button',
        icon: <LayoutTemplate size={15} />,
      },
      {
        name: 'Table',
        route: 'table',
        icon: <LayoutTemplate size={15} />,
      },
      {
        name: 'Date picker',
        route: 'date-picker',
        icon: <LayoutTemplate size={15} />,
      },
    ],
  },
];

const Sidebar = () => (
  <div className="min-h-[100vh] space-y-[2rem] rounded-br-[1.25rem] bg-white pb-[2rem]">
    <div className="flex items-center justify-center border-b py-[2rem]">CosMETIK</div>

    <SidebarLink links={links} />
  </div>
);

export default Sidebar;
