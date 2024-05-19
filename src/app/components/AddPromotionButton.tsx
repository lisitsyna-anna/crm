'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

export interface AddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton: React.FC<AddPromotionButtonProps> = ({
  companyId,
}) => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Button>
  );
};

export default AddPromotionButton;
