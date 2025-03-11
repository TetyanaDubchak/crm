'use client';
import React from 'react';
import Image from 'next/image';
import { Company } from '@/lib/api';
import s from '../styles/components/CompanyInfo.module.scss';

export default function CompanyInfo({ info }: Company) {
  console.log('Info', typeof info);
  return (
    <div>
      <div>
        <Image
          src="/images/comp-logo.svg"
          width={80}
          height={80}
          alt="company's logotype"
        />
        {/* <h3>{info.name}</h3> */}
      </div>
    </div>
  );
}
