import clsx from 'clsx';
import React, { ReactNode } from 'react';

type StackLayoutProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
};

const StackLayout: React.FC<StackLayoutProps> = ({ children, className, gap = 4 }) => {
  return <div className={clsx(`space-y-${gap}`, className)}>{children}</div>;
};

export default StackLayout;
