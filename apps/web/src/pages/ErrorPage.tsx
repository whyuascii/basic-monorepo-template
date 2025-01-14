import { Alert } from '@workspace/ui/components/alert';
import { Button } from '@workspace/ui/components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <Alert variant="destructive" title={t('error.title')}>
        {t('error.message')}
      </Alert>
      <Button variant="default" className="mt-4" onClick={() => navigate(-1)}>
        {t('error.goBack')}
      </Button>
    </div>
  );
};
