import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import { getSummaryStats } from '@/lib/api';
import { StatType } from '@/models/stat';
import { Document } from 'mongoose';

const labelByStat: Record<keyof Omit<StatType, keyof Document>, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const StatsPage = async () => {
  const stats = await getSummaryStats({
    next: {
      revalidate: 5,
    },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(
        Object.keys(labelByStat) as (keyof Omit<StatType, keyof Document>)[]
      ).map((key) => (
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
