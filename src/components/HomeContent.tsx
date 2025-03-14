import React from 'react';

import s from '../styles/components/HomeContent.module.scss';
import Link from 'next/link';

export default function HomeContent() {
  return (
    <div className={s['wrapper']}>
      <h1 className={s['title']}>Welcome to our CRM</h1>
      <div className={s['link-wrapper']}>
        <Link className={s['link-btn']} href="/companies">
          <p className={s['link']}> Companies</p>
        </Link>
        <Link className={s['link-btn']} href="/dashboard">
          <p className={s['link']}>Dashboard</p>
        </Link>
      </div>
    </div>
  );
}
