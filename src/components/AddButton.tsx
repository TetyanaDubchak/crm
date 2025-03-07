'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import s from '@/styles/components/AddButton.module.scss';

interface AddButtonProps {
  content: string;
}

export default function AddButton({ content }: AddButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/companies/new');
  };
  return (
    <button onClick={handleClick} className={s.btn}>
      {content}
    </button>
  );
}
