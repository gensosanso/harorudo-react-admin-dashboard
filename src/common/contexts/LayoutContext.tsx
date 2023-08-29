import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import IBreadcrumb from '../../core/interfaces/breadcrumb.interface';

interface ILayoutContext {
  title: string;
  breadcrumbs: IBreadcrumb[];
  setTitle: (title: string) => void;
  setBreadcrumbs: (title: IBreadcrumb[]) => void;
}

const defaultState: ILayoutContext = {
  title: '',
  breadcrumbs: [],
  setTitle: (_title: string) => {},
  setBreadcrumbs: (_breadcrumbs: IBreadcrumb[]) => {},
};

export const LayoutContext = createContext<ILayoutContext>(defaultState);

interface ILayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: FC<ILayoutProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>('');
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  const handleUpdateLayoutTitle = (newTitle: string) => setTitle(newTitle);
  const handleUpdateLayoutBreadcrumbs = (newBreadcrumbs: IBreadcrumb[]) =>
    setBreadcrumbs(newBreadcrumbs);

  const providerValue = useMemo(
    () => ({
      title,
      breadcrumbs,
      setBreadcrumbs: handleUpdateLayoutBreadcrumbs,
      setTitle: handleUpdateLayoutTitle,
    }),
    [title, breadcrumbs]
  );

  return <LayoutContext.Provider value={providerValue}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
