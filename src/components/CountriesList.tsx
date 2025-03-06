import React from 'react';
import { Country } from '@/lib/api';
import s from '../styles/components/CountriesList.module.scss';

interface CountriesListProps {
  list: Country[];
}

export default function CountriesList({ list }: CountriesListProps) {
  return (
    <ul className={s.list}>
      {list.map((item) => {
        return (
          <li className={s.element} key={item.id}>
            <p className={s.info}>
              {item.country} - {item.quantity}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
