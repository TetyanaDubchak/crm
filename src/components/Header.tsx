import React from 'react';
import Image from 'next/image';
import s from '../styles/components/Header.module.scss';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={s.wrapper}>
      <h1 className={s.title}>{children}</h1>
      <div className={s['user-wrapper']}>
        <Image
          className={s.picture}
          src="/images/avatar.png"
          alt="avatar"
          width={44}
          height={44}
        />
        <div>
          <p className={s.name}>Adam Smith</p>
          <p className={s.email}>adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
