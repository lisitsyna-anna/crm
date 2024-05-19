import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import { getCategories, getCompanies } from '@/lib/api';
import { getCountById } from '@/lib/utils/getCountById';

const CategoriesPage = async () => {
  try {
    console.log('Fetching categories');
    const categories = await getCategories();
    console.log('Fetched categories:', categories);

    console.log('Fetching companies');
    const companies = await getCompanies();
    console.log('Fetched companies:', companies);

    const counts = getCountById(companies, 'categoryId');

    return (
      <DashboardCard label="Categories of companies">
        <div className="grid grid-cols-12 gap-3 pb-5 px-5">
          {categories.map(({ id, title }, index) => (
            <div key={id} className="col-span-3">
              <StatCard
                type={StatCardType.Dark}
                label={title}
                counter={counts[id] || 0}
                isTextLime={(index + 1) % 2 === 0}
              />
            </div>
          ))}
        </div>
      </DashboardCard>
    );
  } catch (error) {
    console.error('Error in CategoriesPage:', error);
    return <div>Error loading categories</div>;
  }
};

export default CategoriesPage;
