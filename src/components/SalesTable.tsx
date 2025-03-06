import React from 'react';
import s from '../styles/components/SalesTable.module.scss';
import sales from '../json/sales.json';
import SalesRows from './SalesRows';

export default function SalesTable() {
  return (
    <table className={s.wrapper}>
      <thead>
        <tr>
          <th className={s['company-title']}>Company</th>
          <th className={s['sold-title']}>Sold</th>
          <th className={s['income-title']}>Income</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((item) => {
          return (
            <SalesRows
              key={item.id}
              name={item.name}
              sold={item.sold}
              income={item.price}
            />
          );
        })}
      </tbody>
    </table>
  );
}
