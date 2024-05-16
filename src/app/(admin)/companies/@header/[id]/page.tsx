'use client';

import Header from '@/app/components/Header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import { CompanyPageProps } from '../../[id]/page';

const CompanyHeader: React.FC<CompanyPageProps> = ({ params }) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return <Header>{`Company (${params.id})`}</Header>;
};

export default CompanyHeader;
