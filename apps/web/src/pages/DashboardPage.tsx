import React from 'react';

import ContainerLayout from '@workspace/ui/layouts/container-layout';

import { useTranslation } from 'react-i18next';

export const DashboardPage: React.FC = () => {
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
        <ContainerLayout className="text-center py-10 space-y-6">
          <h1 className="text-4xl font-extrabold">{t('dashboard.title', 'Welcome Back!')}</h1>
          <p className="text-lg">{t('dashboard.subtitle', 'Here’s what’s happening today in your workspace.')}</p>
        </ContainerLayout>
      </section>

      {/* Overview Widgets */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold mb-8">{t('dashboard.overview.title', 'Key Metrics')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('dashboard.overview.revenue', 'Revenue'),
                value: '$12,340',
                trend: '+12%',
                color: 'bg-green-400',
              },
              {
                title: t('dashboard.overview.users', 'Active Users'),
                value: '1,230',
                trend: '+8%',
                color: 'bg-blue-400',
              },
              {
                title: t('dashboard.overview.tasks', 'Tasks Completed'),
                value: '154',
                trend: '+22%',
                color: 'bg-yellow-400',
              },
              {
                title: t('dashboard.overview.status', 'Subscription Status'),
                value: 'Premium',
                trend: 'Active',
                color: 'bg-purple-400',
              },
            ].map(({ title, value, trend, color }, index) => (
              <div key={index} className={`p-6 ${color} text-white rounded-lg shadow-lg`}>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-3xl font-extrabold mt-2">{value}</p>
                <p className="mt-1 text-sm">{trend}</p>
              </div>
            ))}
          </div>
        </ContainerLayout>
      </section>

      {/* Main Content Area */}
      <section className="bg-yellow-50 dark:bg-gray-800 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold mb-8">{t('dashboard.mainContent.title', 'Your Dashboard')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t('dashboard.activities.title', 'Recent Activities')}</h3>
              <ul className="space-y-4">
                {[
                  t('dashboard.activities.item1', 'John completed a task in Project A.'),
                  t('dashboard.activities.item2', 'New user registration: Alice.'),
                  t('dashboard.activities.item3', 'Revenue goal achieved!'),
                ].map((activity, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <p>{activity}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Insights */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t('dashboard.insights.title', 'Quick Insights')}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t(
                  'dashboard.insights.content',
                  'Your team has achieved 85% of its goals this month. Keep up the great work!',
                )}
              </p>
            </div>
          </div>
        </ContainerLayout>
      </section>

      {/* Data View */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors">
        <ContainerLayout>
          <h2 className="text-3xl font-bold mb-8">{t('dashboard.table.title', 'Recent Transactions')}</h2>
          <table className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2">{t('dashboard.table.column1', 'Date')}</th>
                <th className="px-4 py-2">{t('dashboard.table.column2', 'Description')}</th>
                <th className="px-4 py-2">{t('dashboard.table.column3', 'Amount')}</th>
                <th className="px-4 py-2">{t('dashboard.table.column4', 'Status')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: '2025-01-10',
                  description: t('dashboard.table.item1', 'Subscription Renewal'),
                  amount: '$29.99',
                  status: t('dashboard.table.status1', 'Completed'),
                },
                {
                  date: '2025-01-09',
                  description: t('dashboard.table.item2', 'New User Registration Fee'),
                  amount: '$12.00',
                  status: t('dashboard.table.status2', 'Pending'),
                },
              ].map(({ date, description, amount, status }, index) => (
                <tr key={index} className="text-gray-700 dark:text-gray-300">
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2">{description}</td>
                  <td className="px-4 py-2">{amount}</td>
                  <td className="px-4 py-2">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ContainerLayout>
      </section>
    </main>
  );
};
