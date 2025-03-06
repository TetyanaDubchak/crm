import React from 'react';

import stats from '../../../../json/title.json';
import StatsCard from '@/components/StatsCard';

import s from '../../../../styles/pages/Stats.module.scss';

export default function Page() {
  return (
    <ul className={s.wrapper}>
      {stats.map((item) => {
        return (
          <StatsCard key={item.id} title={item.name} sum={item.quantity} />
        );
      })}
    </ul>
  );
}
