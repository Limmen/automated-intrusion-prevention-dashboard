import React, { lazy, Suspense } from 'react';

const LazyFooter = lazy(() => import('./NotFound'));

const Footer = props => (
  <Suspense fallback={null}>
    <LazyFooter {...props} />
  </Suspense>
);

export default Footer;
