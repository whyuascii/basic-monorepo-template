import React from 'react';

export const TestError: React.FC = () => {
  throw new Error('Hello Error');
};
