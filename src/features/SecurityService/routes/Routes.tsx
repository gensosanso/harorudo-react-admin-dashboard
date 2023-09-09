import { Loader } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

// import Edit from '../crud/Edit';

const SecurityService = lazy(() => import('../page'));
const SercurityServiceDetails = lazy(() => import('../details'));

// const Community=Loadable(lazy(() => import('../page')));

const routes: RouteObject[] = [
  {
    path: '',
    element: (
      <Suspense fallback={<Loader />}>
        <SecurityService />
      </Suspense>
    ),
  },
  {
    path: ':id',
    element: (
      <Suspense fallback={<Loader />}>
        <SercurityServiceDetails />
      </Suspense>
    ),
  },
];

export default routes;
