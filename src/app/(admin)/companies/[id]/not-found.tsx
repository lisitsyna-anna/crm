import Link from 'next/link';

const CompanyNotFound = () => (
  <div className="p-4 flex flex-col gap-3 text-center">
    <p>Could not find company</p>
    <Link href="/companies" className="text-blue-500">
      Back to companies
    </Link>
  </div>
);

export default CompanyNotFound;
