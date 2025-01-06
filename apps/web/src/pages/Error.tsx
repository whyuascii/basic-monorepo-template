import { Alert } from '@workspace/ui/components/alert';
import { Button } from '@workspace/ui/components/button';
import React from 'react';
import { useNavigate } from 'react-router';

export const Error: React.FC = () => {
  let navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <Alert variant="destructive" title="Oops!">
        Something went wrong. Please try again later.
      </Alert>
      <Button variant="default" className="mt-4" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};
