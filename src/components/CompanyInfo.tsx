'use client';
import React from 'react';
import Image from 'next/image';
import { Company } from '@/lib/api';
import { clsx } from 'clsx';
import s from '../styles/components/CompanyInfo.module.scss';

interface CompanyInfoProps {
  info?: Company;
}

export default function CompanyInfo({ info }: CompanyInfoProps) {
  console.log('Info', info);
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  return (
    <div className={s['main-wrapper']}>
      <div className={s['first-wrapper']}>
        <Image
          src="/images/comp-logo.svg"
          width={80}
          height={80}
          alt="company's logotype"
          className={s['picture-logo']}
        />
        <h3 className={s['name-title']}>{info?.name}</h3>
        <div
          className={clsx(s['status-content'], {
            [s['status-active']]: info?.status.toLowerCase() === 'active',
            [s['status-not-active']]:
              info?.status.toLowerCase() === 'not active',
            [s['status-pending']]: info?.status.toLowerCase() === 'pending',
            [s['status-suspended']]: info?.status.toLowerCase() === 'suspended',
          })}
        >
          {info?.status}
        </div>
      </div>
      <div className={s['second-wrapper']}>
        <h4 className={s['info-title']}>About company</h4>
        <div className={s['extra-wrapper']}>
          <p>Category: {info?.category}</p>
          <p>Country: {info?.country}</p>
          <p>Joined data: {formatDate(info.createdAt)}</p>
        </div>
        <p className={s['info-text']}>{info?.info}</p>
      </div>
    </div>
  );
}
