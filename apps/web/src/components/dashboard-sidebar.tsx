import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { RouteConfig } from '../config/routes';

interface SidebarProps {
  routes: RouteConfig[];
  parentPath?: string;
}

export const DashboardSidebar: React.FC<SidebarProps> = ({ routes }) => {
  const { t } = useTranslation('common');

  const generateLinks = (routesConfig: RouteConfig[]) => {
    return routesConfig
      .filter((route) => route.label && route.sidebar !== false) // Only include routes with labels and sidebar enabled
      .map(({ path, label }) => (
        <li key={path} className="mb-2">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-sm ${
                isActive ? 'bg-primary text-white font-bold' : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            {t(label || '')}
          </NavLink>
        </li>
      ));
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-full fixed">
      <nav className="p-4">
        <ul>{generateLinks(routes)}</ul>
      </nav>
    </aside>
  );
};
