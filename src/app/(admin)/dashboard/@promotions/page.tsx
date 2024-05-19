import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import { getPromotions } from '@/lib/api';

const PromotionsPage = async () => {
  const promotions = await getPromotions();

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
          ({ id, title: promotionTitle, companyTitle, discount }) => (
            <tr key={id}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{promotionTitle}</SummaryTableCell>
              <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
            </tr>
          ),
        )}
      </SummaryTable>
    </DashboardCard>
  );
};

export default PromotionsPage;
