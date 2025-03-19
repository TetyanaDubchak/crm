import React from 'react';
import s from '@/styles/components/SearchInput.module.scss';
import Icon from '../components/Icon';

interface SearchInputProps {
  forChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  onSearch: () => void;
}

export default function SearchInput({
  forChangeInput,
  inputValue,
  onSearch,
}: SearchInputProps) {
  return (
    <div className={s.wrapper}>
      <input
        onChange={forChangeInput}
        className={s['input']}
        type="text"
        placeholder="Search..."
        value={inputValue}
      />
      <button onClick={onSearch} className={s['button']} type="button">
        <Icon type="search" />
      </button>
    </div>
  );
}
