'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import SearchInput from '@/components/SearchInput';
import { useSearchValue } from '@/lib/store';
import s from '@/styles/pages/Search.module.scss';
import AddButton from '@/components/AddButton';

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { setInputValue } = useSearchValue();
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnSearch = () => {
    setInputValue(searchValue);
    setSearchValue('');
  };

  const params = useParams();
  const companyId = params.id;

  return (
    <div className={s.wrapper}>
      <SearchInput
        forChangeInput={handleChangeSearch}
        inputValue={searchValue}
        onSearch={handleOnSearch}
      />
      <AddButton link={`/companies/${companyId}/new`} content="Add promotion" />
    </div>
  );
}
