import React from 'react';

export const TestError: React.FC = () => {
  throw new Error('Hello Error');
  return (
    <div>
      <h1>Hello1</h1>
    </div>
  );
};
