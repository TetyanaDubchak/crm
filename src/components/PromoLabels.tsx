import React from 'react';
import { Company } from '@/lib/api';
import s from '../styles/components/PromoLabels.module.scss';

interface PromoLabelsProps {
  info?: Company;
}

export default function PromoLabels({ info }: PromoLabelsProps) {
  const list = info?.promotions;
  return (
    <ul className={s['list-promo']}>
      {list?.map((item, inx) => {
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
