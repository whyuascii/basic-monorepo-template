import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@workspace/ui/globals.css'; // Import shared global styles
import React from 'react';
import { BrowserRouter } from 'react-router';
import { Header } from './components/Header';
import { ErrorBoundary } from './error/ErrorBoundary';
import AppRoutes from './routes';
const queryClient = new QueryClient();

const App: React.FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppRoutes />
      </QueryClientProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
