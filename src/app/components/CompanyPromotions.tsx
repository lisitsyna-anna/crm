'use client';

import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/lib/api';
import Promotion from './Promotion';

export interface CompanyPromotionsProps {
  companyId: string;
}

const CompanyPromotions: React.FC<CompanyPromotionsProps> = ({ companyId }) => {
  const { data: promotions } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <>
      {promotions && promotions.length > 0 ? (
        <div className="grid grid-cols-12 gap-5">
          {promotions.map((promotion) => (
            <div key={promotion._id as string} className="col-span-4">
              <Promotion promotion={promotion} />
            </div>
          ))}
        </div>
      ) : (
        <p>There are no promotions yet</p>
      )}
    </>
  );
};

export default CompanyPromotions;
