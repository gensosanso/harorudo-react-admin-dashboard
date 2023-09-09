import React, { lazy, ReactNode, Suspense } from 'react';

interface ILazyLoaderProps {
  module: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: ReactNode;
  // You can add more props as needed
}

const LazyLoader: React.FC<ILazyLoaderProps> = ({ module, fallback = null, ...rest }) => {
  const LazyComponent = lazy(module);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...rest} />
    </Suspense>
  );
};

export default LazyLoader;
