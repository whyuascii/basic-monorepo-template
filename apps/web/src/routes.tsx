import React from 'react';
import { Route, Routes } from 'react-router';

import { LayoutWrapper } from './components/layout-wrapper';
import { type RouteConfig, routes } from './config/routes';
import { NotFoundPage } from './pages/NotFound';

const generateRoutes = (routesConfig: RouteConfig[]) => {
  return routesConfig.map(({ path, element, children }) => {
    if (children) {
      return (
        <Route key={path} path={path} element={element}>
          {generateRoutes(children)}
        </Route>
      );
    }
    return <Route key={path} path={path} element={element} />;
  });
};

const AppRoutes: React.FC = () => (
  <LayoutWrapper>
    <Routes>
      {generateRoutes(routes)}
      {/* Fallback for undefined routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </LayoutWrapper>
);

export default AppRoutes;
