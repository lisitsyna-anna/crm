import { StatCardType } from './StatCard';
import clsx from 'clsx';

interface StatCardSkeletonProps {
  type: StatCardType;
}

const StatCardSkeleton: React.FC<StatCardSkeletonProps> = ({ type }) => (
  <div
    className={clsx(
      'rounded animate-pulse',
      type === StatCardType.Gradient && 'h-[152px] bg-gray-200 w-full',
      type === StatCardType.Dark && 'h-[106px] bg-gray-300 min-w-36 flex-grow',
    )}
  />
);

export default StatCardSkeleton;
