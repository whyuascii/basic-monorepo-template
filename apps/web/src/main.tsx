import '@workspace/ui/globals.css';
import '../index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@workspace/ui/components/toaster';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { queryClient } from './lib/query-client';
import { initializeOpenTelemetry } from './telemetry';

// start tracing onMount App.tsx will trace only users interactions
initializeOpenTelemetry();

// biome-ignore lint/style/noNonNullAssertion: ReactDOM.createRoot is not yet typed
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
);
