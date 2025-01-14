import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import ContainerLayout from '@workspace/ui/layouts/container-layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AuthPage: React.FC<{ isLogin?: boolean }> = ({ isLogin = true }) => {
  const { t } = useTranslation('common');

  return (
    <ContainerLayout className="py-20 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        {isLogin ? t('auth.loginTitle') : t('auth.registerTitle')}
      </h1>
      <form className="space-y-4">
        {!isLogin && <Input placeholder={t('auth.namePlaceholder')} className="w-full" />}
        <Input type="email" placeholder={t('auth.emailPlaceholder')} className="w-full" />
        <Input type="password" placeholder={t('auth.passwordPlaceholder')} className="w-full" />
        <Button className="w-full bg-primary text-white">
          {isLogin ? t('auth.loginButton') : t('auth.registerButton')}
        </Button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}{' '}
        <a href={isLogin ? '/register' : '/login'} className="text-primary">
          {isLogin ? t('auth.registerLink') : t('auth.loginLink')}
        </a>
      </p>
    </ContainerLayout>
  );
};

export default AuthPage;
