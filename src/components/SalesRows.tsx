import React from 'react';

import s from '../styles/components/SalesRows.module.scss';
import Image from 'next/image';

export interface SalesRowsProps {
  name: string;
  sold: number;
  income: number;
}

export default function SalesRows({ name, sold, income }: SalesRowsProps) {
  return (
    <tr className={s.item}>
      <td className={s['company-content']}>
        <Image
          src="/images/photo-company.png"
          width="20"
          height="20"
          alt="company logotype"
        />
        <p>{name}</p>
      </td>
      <td className={s['sold-content']}>{sold}</td>
      <td className={s['income-content']}>{income}</td>
    </tr>
  );
}
