import React from 'react';
import Icon from './Icon';
import s from '@/styles/components/LogoUploader.module.scss';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploader({
  label,
  placeholder,
}: LogoUploaderProps) {
  return (
    <div className={s.wrapper}>
      {label && <p className={s.title}>{label}</p>}
      <label className={s['choose-wrapper']} htmlFor="logo">
        <Icon type="cloud" />
        {placeholder && <p>{placeholder}</p>}
        <input type="file" accept="image/*" className={s['choose-file']} />
      </label>
    </div>
  );
}
