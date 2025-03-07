import React from 'react';

import s from '@/styles/components/AddFormButton.module.scss';

interface AddFormButtonProps {
  content: string;
}

export default function AddFormButton({ content }: AddFormButtonProps) {
  return (
    <button type="submit" className={s.btn}>
      {content}
    </button>
  );
}
