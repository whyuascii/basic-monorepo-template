import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu';
import React from 'react';
import { NavLink } from 'react-router';
import { type RouteConfig, routes } from '../config/routes';

// Generate navigation links based on the routes configuration
const generateLinks = (routesConfig: RouteConfig[]) => {
  return routesConfig
    .filter((route) => route.label) // Include only routes with labels
    .map(({ path, label, children }) => {
      if (children && children.length > 0) {
        // Render dropdown for nested routes
        return (
          <DropdownMenu key={path}>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">
                {label}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {children.map((child) => (
                <DropdownMenuItem key={child.path}>
                  <NavLink
                    to={`${path}/${child.path}`}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm rounded-lg ${
                        isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }

      // Render simple link for non-nested routes
      return (
        <li key={path} className="mx-2">
          <NavLink
            to={path}
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive
                  ? 'bg-primary text-blue-400 underline font-bold'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-100'
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      );
    });
};

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">MyApp</div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <ul className="flex items-center">{generateLinks(routes)}</ul>
        </nav>
      </div>
    </header>
  );
};
