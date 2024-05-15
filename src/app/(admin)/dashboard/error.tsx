'use client';

import Button from '@/app/components/Button';

interface DashboardErrorProps {
  error: Error;
  reset: () => void;
}

const DashboardError: React.FC<DashboardErrorProps> = ({ error, reset }) => (
  <div className="p-4 flex flex-col gap-3">
    <h2 className="text-center">Something went wrong. {error.message}</h2>
    <Button onClick={() => reset()}>Try Again</Button>
  </div>
);

export default DashboardError;
