import ContainerLayout from '@workspace/ui/layouts/container-layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ResourcesPage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-400 via-green-300 to-blue-400 dark:from-yellow-600 dark:via-green-500 dark:to-blue-700 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-10 w-24 h-24 bg-yellow-300 dark:bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
          <div className="absolute top-10 right-10 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-full rotate-45"></div>
        </div>
        <ContainerLayout className="text-center py-20 space-y-6">
          <h1 className="text-5xl font-extrabold">{t('resources.title', 'Resources')}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            {t(
              'resources.description',
              'Explore our collection of articles, tutorials, and guides to level up your skills and stay ahead in the industry.',
            )}
          </p>
        </ContainerLayout>
      </section>

      {/* Resources Categories */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('resources.categories.title', 'Explore Categories')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('resources.categories.trends', 'Industry Trends'),
                description: t(
                  'resources.categories.trends.description',
                  'Stay updated with the latest trends and innovations in the industry.',
                ),
                iconColor: 'bg-yellow-400 dark:bg-yellow-500',
              },
              {
                title: t('resources.categories.productivity', 'Productivity Tips'),
                description: t(
                  'resources.categories.productivity.description',
                  'Boost your productivity with actionable tips and best practices.',
                ),
                iconColor: 'bg-blue-400 dark:bg-blue-500',
              },
              {
                title: t('resources.categories.guides', 'How-to Guides'),
                description: t(
                  'resources.categories.guides.description',
                  'Step-by-step guides to help you master new skills and tools.',
                ),
                iconColor: 'bg-green-400 dark:bg-green-500',
              },
            ].map(({ title, description, iconColor }, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center transition-transform hover:scale-105"
              >
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
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>

      {/* Featured Articles */}
      <section className="bg-yellow-50 dark:bg-gray-800 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">{t('resources.articles.title', 'Featured Articles')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('resources.articles.article1.title', '10 Ways to Improve Your Workflow'),
                description: t(
                  'resources.articles.article1.description',
                  'Discover actionable tips to streamline your daily tasks and boost efficiency.',
                ),
                link: '/articles/improve-workflow',
              },
              {
                title: t('resources.articles.article2.title', 'Top 5 Industry Trends in 2025'),
                description: t(
                  'resources.articles.article2.description',
                  'Stay ahead with our analysis of emerging trends shaping the future.',
                ),
                link: '/articles/industry-trends-2025',
              },
              {
                title: t('resources.articles.article3.title', 'How to Use Our SaaS Product Effectively'),
                description: t(
                  'resources.articles.article3.description',
                  'Master our tools with this comprehensive how-to guide.',
                ),
                link: '/articles/saas-product-guide',
              },
            ].map(({ title, description, link }, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
                <a href={link} className="text-blue-500 dark:text-blue-400 font-bold hover:underline mt-4 inline-block">
                  {t('resources.readMore', 'Read More')}
                </a>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-400 via-green-300 to-yellow-400 dark:from-blue-700 dark:via-green-600 dark:to-yellow-600 text-gray-900 dark:text-gray-50 py-16 transition-colors">
        <ContainerLayout className="text-center space-y-6">
          <h2 className="text-3xl font-bold">{t('resources.cta.title', 'Have Content to Share?')}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t('resources.cta.description', 'Join our community and share your knowledge with a broader audience.')}
          </p>
          <button className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 dark:hover:bg-yellow-300 transition">
            {t('resources.cta.button', 'Contribute Content')}
          </button>
        </ContainerLayout>
      </section>
    </main>
  );
};

export default ResourcesPage;
