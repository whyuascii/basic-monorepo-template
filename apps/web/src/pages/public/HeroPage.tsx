import { Button } from '@workspace/ui/components/button';
import ContainerLayout from '@workspace/ui/layouts/container-layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HeroPage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-green-300 to-blue-400 dark:from-yellow-600 dark:via-green-500 dark:to-blue-700 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-10 w-24 h-24 bg-yellow-300 dark:bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
        </div>
        <ContainerLayout className="text-center py-20 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">{t('hero.title', 'Transform Your Workflow')}</h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed">
            {t(
              'hero.description',
              'Our SaaS product streamlines your daily tasks and boosts productivity like never before.',
            )}
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 dark:hover:bg-yellow-300 transition">
              {t('hero.ctaPrimary', 'Get Started')}
            </Button>
            <Button className="bg-green-500 dark:bg-green-400 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-green-400 dark:hover:bg-green-300 transition">
              {t('hero.ctaSecondary', 'Learn More')}
            </Button>
          </div>
        </ContainerLayout>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: t('features.title1', 'Automated Workflows'),
              description: t(
                'features.description1',
                'Save hours every week with AI-powered automation that handles repetitive tasks.',
              ),
              iconColor: 'bg-yellow-400 dark:bg-yellow-500',
            },
            {
              title: t('features.title2', 'Team Collaboration'),
              description: t(
                'features.description2',
                'Bring your team together with seamless integrations and shared workspaces.',
              ),
              iconColor: 'bg-blue-400 dark:bg-blue-500',
            },
            {
              title: t('features.title3', 'Insights & Analytics'),
              description: t(
                'features.description3',
                'Track performance with in-depth analytics and actionable insights.',
              ),
              iconColor: 'bg-green-400 dark:bg-green-500',
            },
          ].map(({ title, description, iconColor }, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto ${iconColor} rounded-full flex items-center justify-center`}>
                <svg
                  className="w-8 h-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-3.01L12 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mt-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </ContainerLayout>
      </section>

      {/* Testimonials Section */}
      <section className="bg-yellow-50 dark:bg-gray-800 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">{t('testimonials.title', 'What Our Users Say')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Alex Johnson',
                feedback: t('testimonials.feedback1', 'This product has completely transformed the way my team works!'),
                role: 'Product Manager',
              },
              {
                name: 'Jamie Lee',
                feedback: t('testimonials.feedback2', 'The analytics feature alone is worth every penny.'),
                role: 'Data Analyst',
              },
            ].map(({ name, feedback, role }, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <p className="text-lg text-gray-900 dark:text-gray-50">“{feedback}”</p>
                <div className="mt-4">
                  <h4 className="font-bold">{name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">{t('pricing.title', 'Simple, Transparent Pricing')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: t('pricing.plan1', 'Starter'),
                price: t('pricing.price1', '$9/month'),
                features: [t('pricing.feature1a', 'Basic analytics'), t('pricing.feature1b', 'Up to 3 users')],
              },
              {
                plan: t('pricing.plan2', 'Pro'),
                price: t('pricing.price2', '$29/month'),
                features: [t('pricing.feature2a', 'Advanced analytics'), t('pricing.feature2b', 'Up to 10 users')],
              },
              {
                plan: t('pricing.plan3', 'Enterprise'),
                price: t('pricing.price3', 'Custom Pricing'),
                features: [t('pricing.feature3a', 'Dedicated support'), t('pricing.feature3b', 'Unlimited users')],
              },
            ].map(({ plan, price, features }, index) => (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold">{plan}</h3>
                <p className="text-3xl font-extrabold my-4">{price}</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Button className="mt-6 bg-blue-500 dark:bg-blue-400 text-white font-bold px-4 py-2 rounded-md">
                  {t('pricing.cta', 'Choose Plan')}
                </Button>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>
    </main>
  );
};

export default HeroPage;
