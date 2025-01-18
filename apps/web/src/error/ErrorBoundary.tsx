import { useToast } from '@workspace/ui/hooks/use-toast';
import React, { Component, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { CustomError, RequestError } from './custom-errors';
import { handleError } from './error-handler';

interface ErrorBoundaryProps {
  navigate: (path: string) => void;
  location: string;
  toast: (props: {
    title: string; // Changed from ReactNode to string
    description?: string; // Changed from ReactNode to string
    variant?: string;
  }) => { id: string; dismiss: () => void; update: (props: unknown) => void };
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundaryClass extends Component<React.PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    handleError(error);
    return { hasError: true };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && prevProps.location !== this.props.location) {
      this.setState({ hasError: false }); // Reset error state when location changes
    }
  }

  componentDidCatch(error: Error) {
    const { toast, navigate } = this.props;

    if (error instanceof RequestError) {
      toast({
        title: 'Error',
        description: error.friendlyMessage,
        variant: 'destructive',
      });
    } else if (error instanceof CustomError) {
      toast({
        title: 'Error',
        description: error.friendlyMessage || 'Something went wrong.',
        variant: 'destructive',
      });
    } else {
      // Uncaught Error
      toast({
        title: 'Oops',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
      navigate('/error'); // Redirect to a generic error page
    }
  }

  render() {
    if (this.state.hasError) {
      return null; // Avoid rendering the broken tree
    }
    return this.props.children;
  }
}

// Functional wrapper to provide `navigate` and `location` props
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const ErrorBoundary: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Reset scroll position or perform other tasks on navigation
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ErrorBoundaryClass navigate={navigate} location={location.pathname} toast={toast as ErrorBoundaryProps['toast']}>
      {children}
    </ErrorBoundaryClass>
  );
};
