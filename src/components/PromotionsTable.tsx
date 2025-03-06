import React from 'react';
import s from '../styles/components/PromotionsTable.module.scss';
import promotions from '../json/promotions.json';
import PromotionsRows from './PromotionsRows';

export default function PromotionsTable() {
  return (
    <table className={s.wrapper}>
      <thead>
        <tr>
          <th className={s['company-title']}>Company</th>
          <th className={s['name-title']}>Name</th>
          <th className={s['percent-title']}>%</th>
        </tr>
      </thead>
      <tbody>
        {promotions.map((item) => {
          return (
            <PromotionsRows
              key={item.id}
              company={item.name}
              name={item.name}
              percent={item.percent}
            />
          );
        })}
      </tbody>
    </table>
  );
}
