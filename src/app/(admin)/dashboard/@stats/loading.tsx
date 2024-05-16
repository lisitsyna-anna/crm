import { StatCardType } from '@/app/components/StatCard/StatCard';
import StatCardSkeleton from '@/app/components/StatCard/StatCardSkeleton';

const StatsLoading = () => (
  <div className="w-full flex gap-5">
    {Array.from({ length: 4 }).map((item, index) => (
      <StatCardSkeleton key={`${index}-${item}`} type={StatCardType.Gradient} />
    ))}
  </div>
);

export default StatsLoading;
