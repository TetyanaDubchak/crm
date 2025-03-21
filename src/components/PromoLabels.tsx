'use client';
import React from 'react';
import s from '../styles/components/PromoLabels.module.scss';

interface PromoLabelsProps {
  info: {
    promotion: string;
    title: string;
    subtitle: string;
  }[];
}

export default function PromoLabels({ info }: PromoLabelsProps) {
  return (
    <ul className={s['list-promo']}>
      {info?.map((item, inx) => {
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
