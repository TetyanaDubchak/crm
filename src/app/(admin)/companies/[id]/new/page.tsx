'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import PromoModal from '@/components/PromoModal';

export default function Page() {
  const router = useRouter();
  return (
    <Modal title="promotion" onClose={() => router.back()}>
      <PromoModal />
    </Modal>
  );
}
