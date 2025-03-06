import React from 'react';

import s from '../../../styles/pages/Dashboard.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main className={s.wrapper}>
        <div>{stats}</div>
        <div className={s['contact-wrapper']}>
          {sales} {categories} {countries} {promotions}
        </div>
      </main>
    </div>
  );
}
