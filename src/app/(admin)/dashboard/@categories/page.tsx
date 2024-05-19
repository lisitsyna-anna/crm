import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import { getCategories, getCompanies } from '@/lib/api';
import { getCountById } from '@/lib/utils/getCountById';

const CategoriesPage = async () => {
  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  console.log('categories', categories);
  console.log('companies', companies);
  console.log('counts', counts);

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }, index) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={10}
              isTextLime={(index + 1) % 2 === 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default CategoriesPage;
