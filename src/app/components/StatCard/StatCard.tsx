import clsx from 'clsx';
import styles from './StatCard.module.css';

export enum StatCardType {
  Dark = 'dark',
  Gradient = 'gradient',
}

export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
  isTextLime?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  type,
  label,
  counter,
  isTextLime = false,
}) => (
  <div
    className={clsx(
      'rounded',
      type === StatCardType.Dark &&
        'pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
      type === StatCardType.Gradient && [
        styles.gradient,
        'p-7 bg-purple-200 text-gray-900 text-left',
      ],
    )}
  >
    <p
      className={clsx(
        'text-left before:w-4 before:h-0.5 before:rounded',
        type === StatCardType.Dark &&
          'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
        type === StatCardType.Gradient &&
          'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900',
      )}
    >
      {label}
    </p>
    <p
      className={clsx(
        'text-6xl font-semibold',
        type === StatCardType.Dark && isTextLime && 'text-lime-200',
      )}
    >
      {counter}
    </p>
  </div>
);

export default StatCard;
