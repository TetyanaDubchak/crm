'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import s from '@/styles/components/AddButton.module.scss';

interface AddButtonProps {
  content: string;
  link: string;
}

export default function AddButton({ content, link }: AddButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${link}`);
  };
  return (
    <button onClick={handleClick} className={s.btn}>
      {content}
    </button>
  );
}
