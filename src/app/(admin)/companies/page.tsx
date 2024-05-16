import CompanyRow from '../../components/CompanyRow';
import CompanyTable from '../../components/CompanyTable';
import { CompanyStatus } from '@/types/company';

const CompaniesPage = () => (
  <CompanyTable>
    <CompanyRow
      id={1}
      category="Products"
      company="Costco"
      status={CompanyStatus.Pending}
      promotion={true}
      country="USA"
      joinedDate="02.19.2023"
    />
  </CompanyTable>
);

export default CompaniesPage;
