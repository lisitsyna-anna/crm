'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export interface CompanyPageProps {
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
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
};

export default CompanyPage;
