import React from 'react';
import s from '../styles/components/TitleSlots.module.scss';

export interface TitleSlotsProps {
  title: string;
}

export default function TitleSlots({ title }: TitleSlotsProps) {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
}
