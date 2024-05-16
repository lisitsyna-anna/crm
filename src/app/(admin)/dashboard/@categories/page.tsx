import DashboardCard from '@/app/components/DashboardCard';
import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import { getSummaryCategories } from '@/lib/api';

const CategoriesPage = async () => {
  const categories = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default CategoriesPage;
