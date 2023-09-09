import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from '../common/components/Loader';

// Community
import CommunityModule from '../features/community';
import CommunityRoute from '../features/community/routes/Routes';

// authModule
import AuthModule from '../features/Auth';
import AuthModuleRoutes from '../features/Auth/routes/Routes';

import SecurityServicesModule from '../features/SecurityService';
import SecurityServicesRoute from '../features/SecurityService/routes/Routes';

const AppSpace = lazy(() => import('../layouts/Space'));

// const Community = lazy(() => import('../features/community'));
// const CommunityDetails = lazy(() => import('../features/community/details'));

const Home = lazy(() => import('../features/dashboard'));

const router = createBrowserRouter([
  { path: '/', element: <AuthModule />, children: AuthModuleRoutes },
  {
    path: '/',
    element: <AppSpace />,
    children: [
      {
        path: 'home',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'community',
        element: <CommunityModule />,
        children: CommunityRoute,
      },
      {
        path: 'securityServices',
        element: <SecurityServicesModule />,
        children: SecurityServicesRoute,
      },
    ],
  },
]);

export default router;
