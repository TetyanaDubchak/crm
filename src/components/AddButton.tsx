import React from 'react';

import s from '@/styles/components/AddButton.module.scss';

interface AddButtonProps {
  content: string;
}

export default function AddButton({ content }: AddButtonProps) {
  return <button className={s.btn}>{content}</button>;
}
