import { Outlet, useLocation } from 'react-router-dom';

import LayoutProvider from '../common/contexts/LayoutContext';
import Footer from './partials/Footer';
import AppHeader from './partials/Header';
import Notification from './partials/Notifications';
import AppSidebar from './partials/Sidebar';

const AppSpace = () => {
  const location = useLocation();
  return (
    <LayoutProvider>
      {/* <div className="min-h-screen">
        <div className="flex">
          <div className="fixed top-0 w-fit flex-none">
            <AppSidebar />
          </div>
          <div className="flex-col">
            <AppHeader />
            <div className="gap-5 overflow-hidden bg-red-800">
              <div className="space-y-[2rem] p-[2rem]">
                <Outlet />
              </div>
            </div>
          </div>

          <div className="fixed right-0 top-0 w-fit flex-none">
            <Notification />
          </div>
        </div>
      </div> */}
      <div className="flex h-screen overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <div className="hidden bg-indigo-700 md:flex md:shrink-0">
          <div className="flex w-64 flex-col">
            <AppSidebar />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto focus:outline-none">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white shadow">
            <AppHeader />
          </header>

          {/* Content */}
          <main className="relative z-0 flex-1 bg-white  focus:outline-none">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
            <Footer />
          </main>
        </div>

        {/* Rightbar */}
        {location.pathname.includes('/home') ? (
          <aside className="hidden bg-indigo-700 md:flex md:shrink-0">
            <div className="flex w-64 flex-col">
              <Notification />
            </div>
          </aside>
        ) : (
          ''
        )}
      </div>
    </LayoutProvider>
  );
};

export default AppSpace;
