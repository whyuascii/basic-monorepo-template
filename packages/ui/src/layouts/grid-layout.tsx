import clsx from 'clsx';
import React, { ReactNode } from 'react';

type GridLayoutProps = {
  children: ReactNode;
  className?: string;
  columns?: number;
  gap?: number;
};

const GridLayout: React.FC<GridLayoutProps> = ({ children, className, columns = 3, gap = 4 }) => {
  return <div className={clsx(`grid grid-cols-${columns} gap-${gap}`, className)}>{children}</div>;
};

export default GridLayout;
