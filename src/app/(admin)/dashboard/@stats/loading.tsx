import { StatCardType } from '@/app/components/StatCard/StatCard';
import StatCardSkeleton from '@/app/components/StatCard/StatCardSkeleton';

const StatsLoading = () => (
  <div className="w-full flex gap-5">
    {Array.from({ length: 4 }).map((item) => (
      <StatCardSkeleton key={item as number} type={StatCardType.Gradient} />
    ))}
  </div>
);

export default StatsLoading;
