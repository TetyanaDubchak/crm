import React from 'react';
import { Companies } from '@/lib/api';
import s from '../styles/components/CompaniesRow.module.scss';
import Image from 'next/image';
import { clsx } from 'clsx';

export interface CompaniesRowsProps {
  company: Companies[];
}

export default function CompaniesRows({ company }: CompaniesRowsProps) {
  return (
    <>
      {company.map((item) => {
        return (
          <tr className={s['row']} key={item.id}>
            <td
              className={clsx(s['category-window'], {
                [s['category-active']]: item.status.toLowerCase() === 'active',
                [s['category-not-active']]:
                  item.status.toLowerCase() === 'not active',
                [s['category-pending']]:
                  item.status.toLowerCase() === 'pending',
                [s['category-suspended']]:
                  item.status.toLowerCase() === 'suspended',
              })}
            >
              {item.category}
            </td>
            <td className={s['name-window']}>
              <div>
                <Image
                  src="/images/comp-logo.svg"
                  alt="companies logotype"
                  width={32}
                  height={32}
                />
                <p> {item.name}</p>
              </div>
            </td>
            <td className={s['promotion-window']}>
              <div
                className={clsx(s['promotion-content'], {
                  [s['promotion-active']]:
                    item.status.toLowerCase() === 'active',
                  [s['promotion-not-active']]:
                    item.status.toLowerCase() === 'not active',
                  [s['promotion-pending']]:
                    item.status.toLowerCase() === 'pending',
                  [s['promotion-suspended']]:
                    item.status.toLowerCase() === 'suspended',
                })}
              >
                <p>{item.status}</p>
              </div>
            </td>
            <td>{item.promotion ? 'Yes' : 'No'}</td>
            <td>{item.country}</td>
            <td>{item.createdAt}</td>
          </tr>
        );
      })}
    </>
  );
}
