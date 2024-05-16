import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import { getSummaryStats } from '@/lib/api';

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const StatsPage = async () => {
  const stats = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof stats)[]).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={stats[key]}
          />
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
