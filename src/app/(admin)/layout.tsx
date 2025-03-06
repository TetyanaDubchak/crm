import React from 'react';
import Sidebar from '../../components/Sidebar';

import s from '../../styles/pages/Admin.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <div className={s['pages-wrapper']}>{children}</div>
    </div>
  );
}
