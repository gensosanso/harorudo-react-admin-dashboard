import { ReactNode } from 'react';

interface ISidebarLink {
  name?: string;
  route?: string;
  icon?: ReactNode;
  children?: ISidebarLink[];
}

interface ISidebarItem {
  title?: string;
  links?: ISidebarLink[];
  isDivider?: boolean;
}

export default ISidebarItem;
