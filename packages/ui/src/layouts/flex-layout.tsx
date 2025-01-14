import clsx from 'clsx';
import React, { ReactNode } from 'react';

type FlexLayoutProps = {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  gap?: number;
  align?: string;
  justify?: string;
};

const FlexLayout: React.FC<FlexLayoutProps> = ({
  children,
  className,
  direction = 'row',
  gap = 4,
  align = 'stretch',
  justify = 'start',
}) => {
  return (
    <div
      className={clsx(
        'flex',
        direction && `flex-${direction}`,
        gap && `gap-${gap}`,
        align && `items-${align}`,
        justify && `justify-${justify}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
