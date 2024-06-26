'use client';

import Button from './Button';
import { useRouter } from 'next/navigation';

const AddCompanyButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add Company
    </Button>
  );
};

export default AddCompanyButton;
