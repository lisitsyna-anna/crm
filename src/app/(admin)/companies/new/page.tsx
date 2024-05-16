'use client';

import CompanyForm from '@/app/components/CompanyForm';

const AddNewCompanyPage = () => (
  <div className="py-6 px-10">
    <CompanyForm onSubmit={console.log} />
  </div>
);

export default AddNewCompanyPage;
