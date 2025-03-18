import React from 'react';
import { useEffect } from 'react';
import s from '@/styles/components/Modal.module.scss';
import Icon from './Icon';

export interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  title: string;
}

export default function Modal({ children, onClose, title }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <h2 className={s['main-title']}>Add {title}</h2>
        <button className={s['close-button']} type="button" onClick={onClose}>
          <Icon type="close" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
