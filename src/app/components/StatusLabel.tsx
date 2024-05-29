import clsx from 'clsx';
import { CompanyStatus } from '@/models/company';

interface StatusLabelProps {
  status: CompanyStatus;
  disabled?: boolean;
  styled?: boolean;
}

const labelByStatus = {
  [CompanyStatus.Active]: 'Active',
  [CompanyStatus.NotActive]: 'Not Active',
  [CompanyStatus.Pending]: 'Pending',
  [CompanyStatus.Suspended]: 'Suspended',
};

const StatusLabel: React.FC<StatusLabelProps> = ({
  status,
  disabled = false,
  styled = false,
}) => {
  const label = labelByStatus[status];
  if (!styled) return <>{label}</>;

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === CompanyStatus.Active && 'text-green-700 bg-green-100',
        status === CompanyStatus.NotActive && 'text-red-700 bg-red-100',
        status === CompanyStatus.Pending && 'text-orange-700 bg-orange-100',
        status === CompanyStatus.Suspended && 'text-blue-700 bg-blue-100',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        },
      )}
    >
      <span className="w-1 h-1 rounded-full bg-current" />
      {label}
    </div>
  );
};

export default StatusLabel;
