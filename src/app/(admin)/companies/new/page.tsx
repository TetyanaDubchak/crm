'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import CompanyModal from '@/components/CompanyModal';

export default function Page() {
  const router = useRouter();
  return (
    <Modal title="new company" onClose={() => router.back()}>
      <CompanyModal onClose={() => router.back()} />
    </Modal>
  );
}
