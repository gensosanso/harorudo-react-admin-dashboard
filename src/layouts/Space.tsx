import { Outlet } from 'react-router-dom';

import LayoutProvider from '../common/contexts/LayoutContext';
import AppHeader from './partials/Header';
import AppSidebar from './partials/Sidebar';

const AppSpace = () => {
  return (
    <LayoutProvider>
      <div className="min-h-screen">
        <div className="flex">
          <div className="w-[15rem] flex-none">
            <AppSidebar />
          </div>
          <div className="flex-1 space-y-[2rem] p-[2rem]">
            <AppHeader />
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
};

export default AppSpace;
