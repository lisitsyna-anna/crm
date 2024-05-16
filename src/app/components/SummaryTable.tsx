export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

const SummaryTable: React.FC<SummaryTableProps> = ({ headers, children }) => (
  <table className="table-auto w-full border-separate border-spacing-0">
    <thead>
      <tr>{headers}</tr>
    </thead>
    <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
      {children}
    </tbody>
  </table>
);

export default SummaryTable;
