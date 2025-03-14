'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import CompanyModal from '@/components/CompanyModal';

export default function Page() {
  const router = useRouter();
  return (
    <Modal title="promotion" onClose={() => router.back()}>
      <CompanyModal />
    </Modal>
  );
}
