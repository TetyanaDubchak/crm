import React from 'react';

import s from '../styles/components/InputField.module.scss';

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

export default function InputField({
  label,
  type,
  placeholder,
  name,
}: InputFieldProps) {
  return (
    <label className={s['label-wrapper']}>
      {label}
      <input
        name={name}
        className={s['value-wrapper']}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
