import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from '../common/components/Loader';

const AppSpace = lazy(() => import('../layouts/Space'));

// Documentation
const Button = lazy(() => import('../docs/Button'));
const Table = lazy(() => import('../docs/Table'));
const Input = lazy(() => import('../docs/Input'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppSpace />,
    children: [
      {
        path: '/button',
        element: (
          <Suspense fallback={<Loader />}>
            <Button />
          </Suspense>
        ),
      },
      {
        path: '/table',
        element: (
          <Suspense fallback={<Loader />}>
            <Table />
          </Suspense>
        ),
      },
      {
        path: '/date-picker',
        element: (
          <Suspense fallback={<Loader />}>
            <Input />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
