'use client';

import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import { getPromotions } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

// TODO: Add virtualisation
const PromotionsPage = () => {
  const { data: promotions } = useQuery({
    queryKey: ['promotions'],
    queryFn: () => getPromotions({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  return (
    <DashboardCard label="Promotions">
      {promotions && promotions.length > 0 ? (
        <SummaryTable
          headers={
            <>
              <SummaryTableHeader>Company</SummaryTableHeader>
              <SummaryTableHeader>Name</SummaryTableHeader>
              <SummaryTableHeader align="center">%</SummaryTableHeader>
            </>
          }
        >
          {promotions.map(
            ({ _id, title: promotionTitle, company, discount }) => (
              <tr key={_id as string}>
                <SummaryTableCell>{company.title}</SummaryTableCell>
                <SummaryTableCell>{promotionTitle}</SummaryTableCell>
                <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
              </tr>
            ),
          )}
        </SummaryTable>
      ) : (
        <p className="px-5">There are no promotions yet.</p>
      )}
    </DashboardCard>
  );
};

export default PromotionsPage;
