import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

// import Edit from '../crud/Edit';

const Community = lazy(() => import('../page'));
const CommunityDetails = lazy(() => import('../details'));

// const Community=Loadable(lazy(() => import('../page')));

const routes: RouteObject[] = [
  {
    path: '',
    element: (
      <Suspense fallback={<Loader />}>
        <Community />
      </Suspense>
    ),
  },
  {
    path: ':id',
    element: (
      <Suspense fallback={<Loader />}>
        <CommunityDetails />
      </Suspense>
    ),
  },
];

export default routes;
