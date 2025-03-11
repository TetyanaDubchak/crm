'use client';
import React, { useEffect } from 'react';
import { fetchCompanies } from '@/lib/api';
import { useReceivedData } from '@/lib/store';
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

export default function CompanyTable() {
  const { setReceivedCompany, receivedCompany } = useReceivedData();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCompanies();
      setReceivedCompany(data);
    };

    getData();
  }, [setReceivedCompany]);
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
          {receivedCompany ? (
            <CompaniesRows company={receivedCompany} />
          ) : (
            <tr>
              <td colSpan={headers.length}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
