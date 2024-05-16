import { StatCardType } from '@/app/components/StatCard/StatCard';
import StatCardSkeleton from '@/app/components/StatCard/StatCardSkeleton';

const LoadingCategories = () => (
  <div className="pb-5 px-5 pt-[68px] rounded animate-pulse w-full h-full bg-gray-200">
    <div className="flex gap-3 flex-wrap w-full">
      {Array.from({ length: 8 }).map((item, index) => (
        <StatCardSkeleton key={`${item}-${index}`} type={StatCardType.Dark} />
      ))}
    </div>
  </div>
);

export default LoadingCategories;
