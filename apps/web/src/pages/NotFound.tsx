import { Button } from '@workspace/ui/components/button';
import React from 'react';
import { useNavigate } from 'react-router';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">The page you are looking for does not exist.</p>
      <Button variant="default" className="mt-6" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </div>
  );
};
