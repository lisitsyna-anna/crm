import clsx from 'clsx';

export interface SummaryTableHeaderProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const SummaryTableHeader: React.FC<SummaryTableHeaderProps> = ({
  align = 'left',
  children,
}) => (
  <th
    className={clsx(
      'py-2 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
      `text-${align}`,
      '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
      '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200',
      '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200',
    )}
  >
    {children}
  </th>
);

export default SummaryTableHeader;
