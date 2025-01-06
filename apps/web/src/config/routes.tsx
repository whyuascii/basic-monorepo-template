import React from 'react';
import { Error } from '../pages/Error';
import { Hello1 } from '../pages/Hello1';
import { TestError } from '../pages/TestError';

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
}
export const routes: RouteConfig[] = [
  {
    path: '/hello1',
    element: <Hello1 />,
    label: 'Hello 1', // Label for the navigation menu
  },
  {
    path: '/test-error',
    element: <TestError />,
    label: 'Test Error',
  },
  {
    path: '/error',
    element: <Error />,
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
