import AddCompanyButton from '../../components/AddCompanyButton';
import CompanyRow from '../../components/CompanyRow';
import CompanyTable from '../../components/CompanyTable';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Toolbar from '../../components/Toolbar';
import { CompanyStatus } from '@/types/company';

import { NextPage } from 'next';

const CompaniesPage = () => (
  <>
    <Header>Companies</Header>
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
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
  </>
);

export default CompaniesPage;
