import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@workspace/ui/components/theme-provider';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router';

import i18n from './config/i18n';
import { ErrorBoundary } from './error/ErrorBoundary';
import AppRoutes from './routes';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </I18nextProvider>
);

export default App;
