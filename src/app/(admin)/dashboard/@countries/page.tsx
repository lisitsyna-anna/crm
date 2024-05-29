import Image from 'next/image';
import clsx from 'clsx';
import DashboardCard from '@/app/components/DashboardCard';
import { getCountries, getCompanies } from '@/lib/api';
import { getCountById } from '@/lib/utils/getCountById';

const CountriesPage = async () => {
  const countries = await getCountries();
  const companies = await getCompanies();
  const counts = getCountById(companies, 'country', '_id');

  const sortedCountries = countries
    .map((country) => ({
      ...country,
      count: counts[country._id as string] || 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {sortedCountries.map(({ _id, title }) => (
            <p
              key={_id as string}
              className={clsx(
                'text-xs text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >{`${title} - ${counts[_id as string] || 0}`}</p>
          ))}
        </div>
        <Image width={380} height={262} src="/images/world.svg" alt="world" />
      </div>
    </DashboardCard>
  );
};

export default CountriesPage;
