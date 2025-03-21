'use client';
import React from 'react';
import { Companies } from '@/lib/api';
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
  filteredList: Companies[];
}

export default function CompanyTable({ filteredList }: CompanyTableProps) {
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
          <CompaniesRows company={filteredList} />
        </tbody>
      </table>
    </div>
  );
}
