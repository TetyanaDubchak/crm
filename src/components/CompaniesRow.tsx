import React from 'react';
import Link from 'next/link';
import { Companies } from '@/lib/api';
import s from '../styles/components/CompaniesRow.module.scss';
import Image from 'next/image';
import { clsx } from 'clsx';

export interface CompaniesRowsProps {
  company: Companies[];
}

export default function CompaniesRows({ company }: CompaniesRowsProps) {
  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };
  return (
    <>
      {company.map((item) => {
        return (
          <tr className={s['row']} key={item.id}>
            <td className={s['category-window']}>
              <div
                className={clsx(s['category-content'], {
                  [s['category-active']]:
                    item.status.toLowerCase() === 'active',
                  [s['category-not-active']]:
                    item.status.toLowerCase() === 'not active',
                  [s['category-pending']]:
                    item.status.toLowerCase() === 'pending',
                  [s['category-suspended']]:
                    item.status.toLowerCase() === 'suspended',
                })}
              >
                {item.category}
              </div>
            </td>
            <td className={s['name-window']}>
              <Link href={`/companies/${item.id}`}>
                <div>
                  <Image
                    src="/images/comp-logo.svg"
                    alt="companies logotype"
                    width={32}
                    height={32}
                  />
                  <p> {item.name}</p>
                </div>
              </Link>
            </td>
            <td className={s['status-window']}>
              <div
                className={clsx(s['status-content'], {
                  [s['status-active']]: item.status.toLowerCase() === 'active',
                  [s['status-not-active']]:
                    item.status.toLowerCase() === 'not active',
                  [s['status-pending']]:
                    item.status.toLowerCase() === 'pending',
                  [s['status-suspended']]:
                    item.status.toLowerCase() === 'suspended',
                })}
              >
                <p>{item.status}</p>
              </div>
            </td>
            <td className={s['promotion-window']}>
              <div className={s['promotion-content']}>
                {item.promotion ? (
                  <>
                    <Image
                      src="/images/svg/check.svg"
                      width={16}
                      height={16}
                      alt="check sign"
                    />
                    <p className={s['promotion-yes']}> Yes</p>
                  </>
                ) : (
                  <>
                    <Image
                      src="/images/svg/x-mark.svg"
                      width={16}
                      height={16}
                      alt="cross sign"
                    />
                    <p className={s['promotion-no']}> No</p>
                  </>
                )}
              </div>
            </td>
            <td className={s['country-window']}>{item.country}</td>
            <td className={s['date-window']}>{formatDate(item.createdAt)}</td>
          </tr>
        );
      })}
    </>
  );
}
