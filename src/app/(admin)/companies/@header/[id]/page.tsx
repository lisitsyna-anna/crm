import Header from '@/app/components/Header';
import { getQueryClient } from '@/lib/utils/getQueryClient';
import { getCompany } from '@/lib/api';
import { CompanyType } from '@/models/company';

interface CompanyHeaderProps {
  params: {
    id: string;
  };
}

const CompanyHeader: React.FC<CompanyHeaderProps> = async ({ params }) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData([
    'companies',
    params.id,
  ]) as CompanyType;

  return <Header>{company?.title}</Header>;
};

export default CompanyHeader;
