import { Button } from '@workspace/ui/components/button';
import React from 'react';

export const Hello1 = () => (
  <div style={{ padding: '1rem' }}>
    <h1>Hello 1 with component @workspace/ui Button</h1>
    <Button onClick={() => alert('Hello 1 Button Clicked!')}>Click Me</Button>
  </div>
);
