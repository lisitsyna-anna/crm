import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/SearchInput';
import Toolbar from '@/app/components/Toolbar';

const ToolbarPage = () => (
  <Toolbar action={<AddCompanyButton />}>
    <SearchInput />
  </Toolbar>
);

export default ToolbarPage;
