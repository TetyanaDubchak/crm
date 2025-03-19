'use client';
import React, { useEffect, useState } from 'react';
import { Company } from '@/lib/api';
import { useSearchValue } from '@/lib/store';
import s from '../styles/components/PromoLabels.module.scss';

interface PromoLabelsProps {
  info?: Company;
}

export default function PromoLabels({ info }: PromoLabelsProps) {
  const [filteredPromo, setFilteredPromo] = useState();
  const { inputValue } = useSearchValue();
  const list = info?.promotions;

  useEffect(() => {
    const result = list?.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase().trim()),
    );
    setFilteredPromo(result);
  }, [inputValue, list]);

  if (!filteredPromo || filteredPromo.length === 0) {
    return (
      <tr className={s['wrapper-no-result']}>
        <td colSpan={6} className={s['no-result']}>
          No result...
        </td>
      </tr>
    );
  }

  return (
    <ul className={s['list-promo']}>
      {filteredPromo?.map((item, inx) => {
        return (
          <li className={s.element} key={inx}>
            <div className={s['picture-wrapper']}></div>
            <div className={s['descripe-wrapper']}>
              <h4 className={s['descripe-title']}>{item.title}</h4>
              <p className={s['descripe-text']}>{item.subtitle}</p>
            </div>
            <div className={s['percent-wrapper']}>
              <p>-{item.promotion}%</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
