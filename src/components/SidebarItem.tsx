import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import s from '../styles/components/SidebarItem.module.scss';

import Icon from './Icon';

export interface SidebarItemProps {
  current?: boolean;
  pathname: string;
  icon: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  current,
  pathname,
  icon,
  children,
}: SidebarItemProps) {
  return (
    <li className={s.item}>
      <Link href={pathname} className={clsx(current && s.active)}>
        <Icon type={icon} />
        <p className={s.title}>{children}</p>
      </Link>
    </li>
  );
}
