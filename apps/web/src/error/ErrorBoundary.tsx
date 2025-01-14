import React, { Component, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { handleError } from './error-handler';

interface ErrorBoundaryProps {
  navigate: (path: string) => void;
  location: string;
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

  componentDidCatch() {
    this.props.navigate('/error');
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

  useEffect(() => {
    // Reset scroll position or perform other tasks on navigation
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ErrorBoundaryClass navigate={navigate} location={location.pathname}>
      {children}
    </ErrorBoundaryClass>
  );
};
