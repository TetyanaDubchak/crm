import React from 'react';
import Image from 'next/image';
import { fetchCountries } from '@/lib/api';
import s from '../../../../styles/pages/Countries.module.scss';
import TitleSlots from '@/components/TitleSlots';
import CountriesList from '@/components/CountriesList';

export default async function Page() {
  const countries = await fetchCountries();
  console.log(countries);
  return (
    <div className={s.wrapper}>
      <TitleSlots title="Countries of companies" />
      <div className={s['content-wrapper']}>
        <CountriesList list={countries} />
        <Image
          className={s.map}
          src="/images/world.png"
          width="395"
          height="260"
          alt="world map"
        />
      </div>
    </div>
  );
}
