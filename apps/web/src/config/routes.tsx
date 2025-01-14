import React from 'react';
import AuthPage from '../pages/AuthPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ErrorPage } from '../pages/ErrorPage';
import AboutPage from '../pages/public/AboutPage';
import HeroPage from '../pages/public/HeroPage';
import ResourcesPage from '../pages/public/ResourcePage';

/**
 * RouteConfig is a recursive type that defines the shape of a route configuration object.
 *
 * path: The URL path for the route
 *
 * label: Optional label for navigation display
 *
 * element: The React component to render for this route
 *
 * children: Nested child routes
 */
export interface RouteConfig {
  path: string; // The URL path for the route
  label?: string; // Optional label for navigation display
  element?: React.ReactNode; // The React component to render for this route
  children?: RouteConfig[]; // Nested child routes
  requiresAuth?: boolean; // Requires authentication
  sidebar?: boolean; // Show in sidebar
  header?: boolean; // Show in header
}
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <HeroPage />,
    label: 'nav.home',
    requiresAuth: false, // Public route
  },
  {
    path: '/about',
    element: <AboutPage />,
    label: 'nav.about',
    requiresAuth: false, // Public route
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
    requiresAuth: false, // Public route
    label: 'nav.resources',
  },
  {
    path: '/auth',
    element: <AuthPage isLogin={true} />, // Default to login
    requiresAuth: false, // Public route
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    label: 'nav.dashboard',
    requiresAuth: true, // Requires authentication
    sidebar: true,
    children: [
      { path: 'reports', element: <div>Reports</div>, label: 'sidebar.reports', sidebar: true },
      { path: 'settings', element: <div>Settings</div>, label: 'sidebar.settings', sidebar: true },
      { path: 'users', element: <div>Users</div>, label: 'sidebar.users', sidebar: false, header: true },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },

  //   Examples: Children routes w/ layout
  //   {
  //     path: '/testNested',
  //     element: <TestNested />, //Layout not required
  //     children: [
  //       { path: 'child1', element: <Child1 /> },
  //       { path: 'child2', element: <Child2 /> }
  //     ]
  //   },
  //   Example: Children with index route
  //   {
  //     path: '/testNestedIndex',
  //     element: <TestNested />, //Layout not required
  //     children: [
  //       { index:true  element: <Child1 /> },
  //       { path: 'child2', element: <Child2 /> }
  //     ]
  //   },
];
