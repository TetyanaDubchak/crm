import React from 'react';

import s from '../styles/components/InputField.module.scss';

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

export default function InputField({
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <label className={s['label-wrapper']}>
      {label}
      <input
        className={s['value-wrapper']}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
