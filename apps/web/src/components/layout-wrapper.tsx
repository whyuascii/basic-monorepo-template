import React from 'react';
import { routes } from '../config/routes';
import { useAuth } from '../hooks/use-auth'; // Custom hook for auth state
import { DashboardHeader } from './dashboard-header';
import { DashboardSidebar } from './dashboard-sidebar';
import { PublicHeader } from './public/public-header';

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Find the dashboard route to use its children for the sidebar
  const publicRoutes = routes.filter((route) => !route.requiresAuth);
  const dashboardRoutes = routes.find((route) => route.path === '/dashboard')?.children || [];

  return (
    <div className="h-screen flex flex-col">
      {isAuthenticated ? (
        <>
          <DashboardHeader routes={dashboardRoutes} />
          <div className="flex flex-1">
            <DashboardSidebar routes={dashboardRoutes} />
            <main className="flex-1 ml-64 p-4">{children}</main>
          </div>
        </>
      ) : (
        <>
          <PublicHeader routes={publicRoutes} />
          <main className="flex-1">{children}</main>
        </>
      )}
    </div>
  );
};
