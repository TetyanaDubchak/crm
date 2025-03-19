'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useReceivedData, useSearchValue } from '@/lib/store';
import { Company } from '@/lib/api';
import s from '@/styles/pages/Promo.module.scss';
import CompanyInfo from '@/components/CompanyInfo';
import PromoLabels from '@/components/PromoLabels';

export default function Promo() {
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const params = useParams();
  const companyId = params.id;
  const { receivedCompany }: { receivedCompany: Company[] } = useReceivedData();

  useEffect(() => {
    if (!companyId || receivedCompany.length === 0) return;

    const result = receivedCompany.find(
      (item) => String(item.id) === companyId,
    );
    setCurrentCompany(result || null);
  }, [companyId, receivedCompany]);

  return (
    <div className={s.wrapper}>
      {currentCompany && <CompanyInfo info={currentCompany} />}
      {currentCompany && <PromoLabels info={currentCompany} />}
    </div>
  );
}
