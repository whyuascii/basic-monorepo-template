import { Button } from '@workspace/ui/components/button';
import { ModeToggle } from '@workspace/ui/components/mode-toggle';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { RouteConfig } from '../../config/routes';
interface SidebarProps {
  routes: RouteConfig[];
  parentPath?: string;
}

export const PublicHeader: React.FC<SidebarProps> = ({ routes }) => {
  const { t } = useTranslation('common');

  return (
    <header className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 shadow-md transition-colors duration-300">
      <div className="relative container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-300 dark:bg-green-700 rounded-full">
            <img src="../images/random.png" alt="MyApp Logo" className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold">MyApp</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {routes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className="text-lg font-semibold hover:text-green-500 dark:hover:text-yellow-400 transition-all"
            >
              {t(label || '')}
            </NavLink>
          ))}
        </nav>

        {/* Action */}
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-400 dark:hover:bg-yellow-300 transition"
          >
            {t('nav.login')}
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
