'use client';

import { getCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import CompanyRow from './CompanyRow';

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const CompanyTable = () => {
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  return (
    <div className="py-8 px-10 bg-gray-100">
      {companies && companies.length > 0 ? (
        <table className="table-auto w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="pb-5 text-sm font-light text-gray-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {companies?.map((company) => (
              <CompanyRow key={company._id as string} company={company} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>There are no companies yet.</p>
      )}
    </div>
  );
};

export default CompanyTable;
