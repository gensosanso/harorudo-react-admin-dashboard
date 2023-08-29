import { RouterProvider } from 'react-router-dom';

import AppRouting from './routes/AppRouting';

const App = () => {
  return <RouterProvider router={AppRouting} />;
};

export default App;
