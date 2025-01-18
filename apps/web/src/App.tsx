import { ThemeProvider } from '@workspace/ui/components/theme-provider';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router';

import i18n from './config/i18n';
import { ErrorBoundary } from './error/ErrorBoundary';
import AppRoutes from './routes';

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </I18nextProvider>
);

export default App;
