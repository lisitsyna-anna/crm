'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/PromotionFormModal';

export interface InterceptAddNewPromotionPageProps {
  params: { id: string };
}

const InterceptAddNewPromotionPage: React.FC<
  InterceptAddNewPromotionPageProps
> = ({ params }) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default InterceptAddNewPromotionPage;
