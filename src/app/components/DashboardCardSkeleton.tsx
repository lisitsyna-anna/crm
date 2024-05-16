import React from 'react';

interface DashboardCardSkeletonProps {
  children: React.ReactNode;
}

const DashboardCardSkeleton: React.FC<DashboardCardSkeletonProps> = ({
  children,
}) => (
  <div className="rounded animate-pulse bg-gray-200 h-full w-full">
    <div className="p-5 bg-gray-700 w-full"></div>
    <div>{children}</div>
  </div>
);

export default DashboardCardSkeleton;
