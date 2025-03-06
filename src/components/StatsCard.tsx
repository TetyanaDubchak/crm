import React from 'react';
import s from '../styles/components/StatsCard.module.scss';

export interface StatsCardProps {
  title: string;
  sum: number;
}

export default function StatsCard({ title, sum }: StatsCardProps) {
  return (
    <li className={s.item}>
      <h4 className={s.title}>{title}</h4>
      <p className={s.content}>{sum}</p>
    </li>
  );
}
