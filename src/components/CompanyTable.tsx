'use client';
import React, { useEffect } from 'react';
import { fetchCompanies, Companies } from '@/lib/api';
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

interface CompanyTableProps {
  filtredList: Companies[];
}

export default function CompanyTable({ filtredList }: CompanyTableProps) {
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
          {filtredList ? (
            <CompaniesRows company={filtredList} />
          ) : (
            <tr className={s['wrapper-loading']}>
              <td className={s['loading']} colSpan={headers.length}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
