'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useReceivedData, useSearchValue } from '@/lib/store';
import { Company } from '@/lib/api';
import s from '@/styles/pages/Promo.module.scss';
import CompanyInfo from '@/components/CompanyInfo';
import PromoLabels from '@/components/PromoLabels';
import Loader from '@/components/Loader';

export default function Promo() {
  const params = useParams();
  const companyId = params.id;
  const [currentCompany, setCurrentCompany] = useState<Company | null>(null);
  const listPromo = currentCompany?.promotions;
  const [loading, setLoading] = useState(true);
  const [filteredPromo, setFilteredPromo] = useState<
    {
      promotion: string;
      title: string;
      subtitle: string;
    }[]
  >(listPromo ?? []);
  const { inputValue } = useSearchValue();

  const { receivedCompany }: { receivedCompany: Company[] } = useReceivedData();

  useEffect(() => {
    if (!companyId || receivedCompany.length === 0) return;

    const result = receivedCompany.find(
      (item) => String(item.id) === companyId,
    );
    setCurrentCompany(result || null);
  }, [companyId, receivedCompany]);

  useEffect(() => {
    const result = listPromo?.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase().trim()),
    );
    setFilteredPromo(result ?? []);
    setLoading(false);
  }, [inputValue, listPromo]);

  return (
    <div className={s.wrapper}>
      {currentCompany && <CompanyInfo info={currentCompany} />}
      {loading ? (
        <Loader />
      ) : filteredPromo && filteredPromo?.length > 0 ? (
        <PromoLabels info={filteredPromo} />
      ) : filteredPromo && filteredPromo.length > 0 ? null : (
        <p className={s['no-result']}>Sorry, no result...</p>
      )}
    </div>
  );
}
