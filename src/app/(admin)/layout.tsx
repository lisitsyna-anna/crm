import Sidebar from '../components/Sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => (
  <>
    <Sidebar />
    <div className="ml-60">{children}</div>
  </>
);

export default AdminLayout;
