import React, { memo } from 'react';
import dynamic from 'next/dynamic';

export const CommonTopProgressBar = dynamic(() => import('./TopProgressBar'), {
  ssr: false,
});

export const TopProgressBar = () => <CommonTopProgressBar />;

export default memo(TopProgressBar);
