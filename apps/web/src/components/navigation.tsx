import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { RouteConfig } from '../config/routes';

interface NavigationProps {
  routes: RouteConfig[];
}

export const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  const { t } = useTranslation('common');

  const generateLinks = (routesConfig: RouteConfig[]) => {
    return routesConfig
      .filter((route) => route.label) // Only include routes with labels
      .map(({ path, label, children }) => {
        if (children && children.length > 0) {
          return (
            <div key={path} className="group relative">
              <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">
                {t(label || '')}
              </button>
              <div className="hidden group-hover:block absolute bg-white shadow-md mt-2">
                {children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={`${path}/${child.path}`}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm ${
                        isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                      }`
                    }
                  >
                    {t(child.label || '')}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        }

        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-3 py-2 text-sm rounded-lg ${
                isActive ? 'bg-primary text-blue-400 underline font-bold' : 'text-gray-600 hover:text-primary'
              }`
            }
          >
            {t(label || '')}
          </NavLink>
        );
      });
  };

  return <nav className="flex space-x-4">{generateLinks(routes)}</nav>;
};
