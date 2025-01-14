import React from 'react';
import { useTranslation } from 'react-i18next';
import ContainerLayout from '@workspace/ui/layouts/container-layout';

const AboutPage: React.FC = () => {
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
          <h1 className="text-5xl font-extrabold">{t('about.title', 'About Us')}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            {t('about.description', 'Discover our journey, our team, and the vision that drives us forward.')}
          </p>
        </ContainerLayout>
      </section>

      {/* Company History */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.history.title', 'Our History')}</h2>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300">
            {t(
              'about.history.description',
              'Founded in 2010, our company has grown from a small startup to a leader in SaaS solutions, serving thousands of customers worldwide. Our story is one of passion, perseverance, and innovation.',
            )}
          </p>
        </ContainerLayout>
      </section>

      {/* Vision and Mission */}
      <section className="bg-yellow-50 dark:bg-gray-800 py-16 transition-colors">
        <ContainerLayout>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('about.vision.title', 'Our Vision')}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t(
                  'about.vision.description',
                  'To empower businesses to achieve their full potential through innovative and intuitive software solutions.',
                )}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('about.mission.title', 'Our Mission')}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t(
                  'about.mission.description',
                  'Our mission is to deliver world-class SaaS products that streamline workflows and improve productivity.',
                )}
              </p>
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.team.title', 'Meet Our Team')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Jane Doe', role: 'CEO', img: '/team/jane.jpg' },
              { name: 'John Smith', role: 'CTO', img: '/team/john.jpg' },
              { name: 'Alice Johnson', role: 'Product Manager', img: '/team/alice.jpg' },
              { name: 'Bob Brown', role: 'Lead Developer', img: '/team/bob.jpg' },
            ].map(({ name, role, img }, index) => (
              <div key={index} className="text-center">
                <img src={img} alt={`${name}'s picture`} className="w-24 h-24 mx-auto rounded-full mb-4 shadow-md" />
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-700 dark:text-gray-300">{role}</p>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-400 via-green-300 to-yellow-400 dark:from-blue-700 dark:via-green-600 dark:to-yellow-600 text-gray-900 dark:text-gray-50 py-16 transition-colors">
        <ContainerLayout className="text-center space-y-6">
          <h2 className="text-3xl font-bold">{t('about.cta.title', 'Join Us on Our Journey')}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t('about.cta.description', 'Be a part of our story and experience the power of innovation firsthand.')}
          </p>
          <button className="bg-yellow-500 dark:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 dark:hover:bg-yellow-300 transition">
            {t('about.cta.button', 'Contact Us')}
          </button>
        </ContainerLayout>
      </section>
    </main>
  );
};

export default AboutPage;
