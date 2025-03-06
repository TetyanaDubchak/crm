import React from 'react';

import s from '../../../../styles/pages/Categories.module.scss';
import TitleSlots from '@/components/TitleSlots';
import CategoriesList from '@/components/CategoriesList';

export default function Page() {
  return (
    <div className={s.wrapper}>
      <TitleSlots title="Categories of companies" />
      <CategoriesList />
    </div>
  );
}
