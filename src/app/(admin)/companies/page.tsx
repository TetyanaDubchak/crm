'use client';
import React, { useState } from 'react';
import CompanyTable from '@/components/CompanyTable';
import { Companies } from '@/lib/api';
import s from '@/styles/pages/Companies.module.scss';
import SearchInput from '@/components/SearchInput';
import AddButton from '@/components/AddButton';
import { useReceivedData } from '@/lib/store';

export default function Page() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { receivedCompany } = useReceivedData();
  const [filteredList, setFilteredList] = useState<Companies | null>(
    receivedCompany,
  );
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnSearch = () => {
    const result = receivedCompany.filter((item) =>
      item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
    );
    setFilteredList(result);
    setSearchValue('');
  };

  return (
    <div>
      <div className={s.wrapper}>
        <SearchInput
          inputValue={searchValue}
          forChangeInput={handleChangeSearch}
          onSearch={handleOnSearch}
        />
        <AddButton link="/companies/new" content="Add company" />
      </div>
      <CompanyTable filtredList={filteredList} />
    </div>
  );
}
