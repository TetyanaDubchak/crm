'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import SearchInput from '@/components/SearchInput';

import s from '@/styles/pages/Search.module.scss';
import AddButton from '@/components/AddButton';

export default function Search() {
  const params = useParams();
  const companyId = params.id;
  return (
    <div className={s.wrapper}>
      <SearchInput />
      <AddButton link={`/companies/${companyId}/new`} content="Add promotion" />
    </div>
  );
}
