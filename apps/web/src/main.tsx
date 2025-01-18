import '@workspace/ui/globals.css';
import '../index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@workspace/ui/components/toaster';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeOpenTelemetry } from './telemetry';

// start tracing onMount App.tsx will trace only users interactions
initializeOpenTelemetry();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
);
