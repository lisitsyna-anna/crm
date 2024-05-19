import AddPromotionButton from '@/app/components/AddPromotionButton';
import SearchInput from '@/app/components/SearchInput';
import Toolbar from '@/app/components/Toolbar';

interface CompanyToolbarProps {
  params: {
    id: string;
  };
}

const CompanyToolbar: React.FC<CompanyToolbarProps> = ({ params }) => (
  <Toolbar action={<AddPromotionButton companyId={params.id} />}>
    <SearchInput />
  </Toolbar>
);

export default CompanyToolbar;
