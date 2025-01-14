import React, { ReactNode } from 'react';
import clsx from 'clsx';

type StackLayoutProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
};

const StackLayout: React.FC<StackLayoutProps> = ({ children, className, gap = 4 }) => {
  return <div className={clsx(`space-y-${gap}`, className)}>{children}</div>;
};

export default StackLayout;
