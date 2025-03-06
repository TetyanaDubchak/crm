import React from 'react';

import s from '../styles/components/PromotionsRows.module.scss';
import Image from 'next/image';

export interface PromotionsRowsProps {
  company: string;
  name: string;
  percent: number;
}

export default function PromotionsRows({
  company,
  name,
  percent,
}: PromotionsRowsProps) {
  return (
    <tr className={s.item}>
      <td className={s['company-content']}>
        <Image
          src="/images/photo-company.png"
          width="20"
          height="20"
          alt="company logotype"
        />
        <p>{company}</p>
      </td>
      <td className={s['name-content']}>{name}</td>
      <td className={s['percent-content']}>- {percent} %</td>
    </tr>
  );
}
