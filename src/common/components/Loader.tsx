import clsx from 'clsx';
import { FC } from 'react';
import { BiLoader } from 'react-icons/bi';

interface ILoaderProps {
  hSize?: string;
  message?: string;
}

const Loader: FC<ILoaderProps> = ({ hSize = 'h-[80vh]', message }) => (
  <div className={clsx(hSize, 'flex w-full items-center justify-center')}>
    <div className="flex items-center justify-center gap-3">
      <BiLoader className="h-6 w-6 animate-spin text-primary" />
      <span className="font-medium text-primary">{message || 'Chargement...'}</span>
    </div>
  </div>
);

Loader.displayName = 'Loader';

export default Loader;
