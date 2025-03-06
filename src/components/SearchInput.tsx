import React from 'react';

import s from '@/styles/components/SearchInput.module.scss';
import Icon from '../components/Icon';

export default function SearchInput() {
  return (
    <div className={s.wrapper}>
      <input className={s['input']} type="text" placeholder="Search..." />
      <button className={s['button']} type="button">
        <Icon type="search" />
      </button>
    </div>
  );
}
