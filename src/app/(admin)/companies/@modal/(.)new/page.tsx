'use client';

import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/CompanyFormModal';

const InterceptAddNewCompanyPage = () => {
  const router = useRouter();

  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default InterceptAddNewCompanyPage;
