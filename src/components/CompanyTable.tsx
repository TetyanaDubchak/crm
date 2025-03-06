import React from 'react';
import { fetchCompanies } from '@/lib/api';
import s from '../styles/components/CompanyTable.module.scss';
import CompaniesRows from './CompaniesRow';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined data',
];

export default async function CompanyTable() {
  const data = await fetchCompanies();

  return (
    <div className={s.wrapper}>
      <table className={s['table']}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th className={s['header-title']} key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <CompaniesRows company={data} />
        </tbody>
      </table>
    </div>
  );
}
