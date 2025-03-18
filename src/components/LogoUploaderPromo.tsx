import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import s from '@/styles/components/LogoUploaderPromo.module.scss';

export interface LogoUploaderPromoProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploaderPromo({
  label,
  placeholder,
}: LogoUploaderPromoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className={s.wrapper}>
      {label && <p className={s.title}>{label}</p>}
      <label
        className={s['choose-wrapper']}
        onClick={handleClick}
        htmlFor="logo"
      >
        {image ? (
          <Image
            src={image}
            alt="Uploaded photo"
            width={176}
            height={176}
            className={s['picture']}
          />
        ) : (
          <>
            <Icon type="cloud" />
            {placeholder && <p>{placeholder}</p>}
          </>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className={s['choose-file']}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
