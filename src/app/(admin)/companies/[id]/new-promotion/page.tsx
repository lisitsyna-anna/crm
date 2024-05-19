'use client';

import PromotionForm from '@/app/components/PromotionForm';

export interface AddNewPromotionPageProps {
  params: { id: string };
}

const AddNewPromotionPage: React.FC<AddNewPromotionPageProps> = ({
  params,
}) => (
  <div className="py-6 px-10">
    <PromotionForm companyId={params.id} />
  </div>
);

export default AddNewPromotionPage;
