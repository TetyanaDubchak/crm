import React from 'react';

import SearchInput from '@/components/SearchInput';

import s from '@/styles/pages/Search.module.scss';
import AddButton from '@/components/AddButton';

export default function Search() {
  return (
    <div className={s.wrapper}>
      <SearchInput />
      <AddButton link="/companies/new" content="Add company" />
    </div>
  );
}
