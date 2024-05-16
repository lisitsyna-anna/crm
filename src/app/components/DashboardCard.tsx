interface DashboardCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ label, children }) => (
  <div className="rounded bg-gray-100 w-full h-full">
    <p className="p-5 text-xl text-gray-900 font-medium">{label}</p>
    <div>{children}</div>
  </div>
);

export default DashboardCard;
