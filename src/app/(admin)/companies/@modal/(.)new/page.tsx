'use client';

import { useRouter } from 'next/navigation';
import CompanyForm from '@/app/components/CompanyForm';
import Modal from '@/app/components/Modal';

const InterceptModalPage = () => {
  const router = useRouter();

  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
};

export default InterceptModalPage;
