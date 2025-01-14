import { Button } from '@workspace/ui/components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteConfig } from '../config/routes';
import { Navigation } from './navigation';

interface SidebarProps {
  routes: RouteConfig[];
  parentPath?: string;
}

export const DashboardHeader: React.FC<SidebarProps> = ({ routes }) => {
  const { t } = useTranslation('common');

  const headerRoutes = routes.filter((route) => route.header !== false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Dashboard</div>
        <Navigation routes={headerRoutes} />
        <Button variant="secondary" className="ml-4" onClick={() => console.log('Logout')}>
          {t('nav.logout')}
        </Button>
      </div>
    </header>
  );
};
