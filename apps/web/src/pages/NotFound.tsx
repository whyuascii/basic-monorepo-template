import { Button } from '@workspace/ui/components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">{t('notFound.title')}</h1>
      <p className="text-lg text-gray-600 mt-4">{t('notFound.message')}</p>
      <Button variant="default" className="mt-6" onClick={() => navigate('/')}>
        {t('notFound.goHome')}
      </Button>
    </div>
  );
};
