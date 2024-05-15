'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

interface CompanyPageProps {
  params: {
    id: string;
  };
}

const CompanyPage: React.FC<CompanyPageProps> = ({ params }) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies</Header>
    </>
  );
};

export default CompanyPage;
