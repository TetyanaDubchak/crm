'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useReceivedData } from '@/lib/store';
import { Company } from '@/lib/api';
import s from '@/styles/pages/Search.module.scss';
import CompanyInfo from '@/components/CompanyInfo';

export default function Promo() {
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const params = useParams();
  const companyId = params.id?.toString();
  const { receivedCompany } = useReceivedData();

  useEffect(() => {
    const result = receivedCompany.find((item) => (item.id = companyId));
    setCurrentCompany(result);
  }, [companyId, receivedCompany]);
  console.log('jk,mn', currentCompany);
  return (
    <div className={s.wrapper}>
      <CompanyInfo info={currentCompany} />
    </div>
  );
}
