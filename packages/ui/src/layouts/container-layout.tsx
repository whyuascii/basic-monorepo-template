import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ContainerLayoutProps = {
  children: ReactNode;
  className?: string;
};

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className }) => {
  return <div className={clsx('container mx-auto px-4', className)}>{children}</div>;
};

export default ContainerLayout;
