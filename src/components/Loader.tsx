import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

import s from '@/styles/components/Loader.module.scss';

export default function Loader() {
  return (
    <div className={s['wrapper']}>
      <HashLoader
        className={s['spinner']}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
