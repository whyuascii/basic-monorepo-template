import '@workspace/ui/globals.css';
import '../index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeOpenTelemetry } from './telemetry';

// start tracing onMount App.tsx will trace only users interactions
initializeOpenTelemetry();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
