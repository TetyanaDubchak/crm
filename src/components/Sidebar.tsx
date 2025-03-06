'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import s from '../styles/components/Sidebar.module.scss';

import Icon from './Icon';
import SidebarItem from './SidebarItem';

export default function Sidebar({}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside>
      <div className={s.wrapper}>
        <Image
          src="images/svg/logotype.svg"
          alt="logo"
          width={122}
          height={24}
          priority={false}
          className={s.logo}
        />
        <ul>
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname="/dashboard"
            icon="dashboard"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            pathname="/companies"
            icon="companies"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className={s.exit} type="button" onClick={handleExitClick}>
          <Icon type="exit" />
          <span>Exit</span>
        </button>
      </div>
    </aside>
  );
}
