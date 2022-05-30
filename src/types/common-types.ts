import { ReactNode, ElementType } from 'react';
import { NextPage } from 'next';

export type ChildrenProps = {
  children?: ReactNode | undefined;
};

export type AppNextPage = NextPage & {
  Layout?: ElementType;
};
