import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import { getSummaryPromotions } from '@/lib/api';

const PromotionsPage = async () => {
  const promotions = await getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
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
          ({ promotionId, promotionName, companyTitle, discount }) => (
            <tr key={promotionId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{promotionName}</SummaryTableCell>
              <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
            </tr>
          ),
        )}
      </SummaryTable>
    </DashboardCard>
  );
};

export default PromotionsPage;
