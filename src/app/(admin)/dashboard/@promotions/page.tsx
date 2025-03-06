import React from 'react';
import s from '../../../../styles/pages/Promotions.module.scss';
import TitleSlots from '@/components/TitleSlots';
import PromotionsTable from '@/components/PromotionsTable';

export default async function Page() {
  return (
    <div className={s.wrapper}>
      <TitleSlots title="Sales details" />
      <PromotionsTable />
    </div>
  );
}
