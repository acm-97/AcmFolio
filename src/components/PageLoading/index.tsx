import React from 'react';
import dynamic from 'next/dynamic';
import { PageError } from '@/components/PageError';
// loading from client
export const LazyPageLoading = dynamic(() => import('./PageLoading'), {
  ssr: false,
});

export const PageLoading = () => (
  <PageError>
    <LazyPageLoading />{' '}
  </PageError>
);
