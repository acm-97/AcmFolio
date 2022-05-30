import dynamic from 'next/dynamic';
import React, { memo } from 'react';

export const CommonTopProgressBar = dynamic(() => import('./TopProgressBar'), {
  ssr: false,
});

export const TopProgressBar = () => <CommonTopProgressBar />;

export default memo(TopProgressBar);
