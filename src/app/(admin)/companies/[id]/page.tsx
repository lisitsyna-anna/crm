import Header from '@/app/components/Header';

interface CompanyPageProps {
  params: {
    id: string[];
  };
}

const CompanyPage: React.FC<CompanyPageProps> = ({ params }) => {
  return (
    <>
      <Header>Companies</Header>
    </>
  );
};

export default CompanyPage;
