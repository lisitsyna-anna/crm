import DashboardCard from '@/app/components/DashboardCard';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import { getSummarySales } from '@/lib/api';

// TODO: Add virtualisation
const SalesPage = async () => {
  const sales = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      {sales.length > 0 ? (
        <SummaryTable
          headers={
            <>
              <SummaryTableHeader>Company</SummaryTableHeader>
              <SummaryTableHeader align="center">Sold</SummaryTableHeader>
              <SummaryTableHeader align="center">Income</SummaryTableHeader>
            </>
          }
        >
          {sales.map(({ company, sold, income }) => (
            <tr key={company._id as string}>
              <SummaryTableCell>{company.title}</SummaryTableCell>
              <SummaryTableCell align="center">{sold}</SummaryTableCell>
              <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
            </tr>
          ))}
        </SummaryTable>
      ) : (
        <p className="px-5">There are no sales yet</p>
      )}
    </DashboardCard>
  );
};

export default SalesPage;
