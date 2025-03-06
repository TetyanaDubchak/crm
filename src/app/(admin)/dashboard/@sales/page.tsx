import React from 'react';

import s from '../../../../styles/pages/Sales.module.scss';
import TitleSlots from '@/components/TitleSlots';
import SalesTable from '@/components/SalesTable';

export default function Page() {
  return (
    <div className={s.wrapper}>
      <TitleSlots title="Sales details" />
      <SalesTable />
    </div>
  );
}
