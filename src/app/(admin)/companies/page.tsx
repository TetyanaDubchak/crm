'use client';
import React, { useEffect, useState } from 'react';
import CompanyTable from '@/components/CompanyTable';
import { fetchCompanies, Companies } from '@/lib/api';
import s from '@/styles/pages/Companies.module.scss';
import SearchInput from '@/components/SearchInput';
import AddButton from '@/components/AddButton';
import { useReceivedData } from '@/lib/store';
import Loader from '@/components/Loader';

export default function Page() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { setReceivedCompany, receivedCompany } = useReceivedData();
  const [filteredList, setFilteredList] = useState(receivedCompany ?? []);
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setFilteredList(receivedCompany);
  }, [receivedCompany]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCompanies();
        setReceivedCompany(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [setReceivedCompany]);

  const handleOnSearch = () => {
    const result =
      receivedCompany?.filter((item: Companies) =>
        item.name.toLowerCase().includes(searchValue.trim().toLowerCase()),
      ) || [];
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
      {loading ? (
        <Loader />
      ) : filteredList && filteredList?.length > 0 ? (
        <CompanyTable filteredList={filteredList} />
      ) : receivedCompany && receivedCompany.length > 0 ? null : (
        <p className={s['no-result']}>Sorry, no result...</p>
      )}
    </div>
  );
}
