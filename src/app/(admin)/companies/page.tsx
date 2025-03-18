import React from 'react';
import CompanyTable from '@/components/CompanyTable';
// import Search from './@search/page';
import s from '@/styles/pages/Companies.module.scss';
import SearchInput from '@/components/SearchInput';
import AddButton from '@/components/AddButton';

export default function Page() {
  return (
    <div>
      <div className={s.wrapper}>
        <SearchInput />
        <AddButton link="/companies/new" content="Add company" />
      </div>
      <CompanyTable />
    </div>
  );
}
