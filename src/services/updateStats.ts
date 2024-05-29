import Stat, { StatType } from '@/models/stat';
import { CompanyStatus } from '@/models/company';
import { Document } from 'mongoose';

interface UpdateStatsParams {
  operation: 'create' | 'delete';
  collection: 'company' | 'promotion' | 'category';
  companyStatus?: CompanyStatus;
}

type CounterFields = Omit<StatType, keyof Document>;

/**
 * Updates the specified counter field in the Stat document based on the operation.
 *
 * @param {StatType} stat - The Stat document to update.
 * @param {keyof CounterFields} field - The field to update in the Stat document.
 * @param {'create' | 'delete'} operation - The operation to perform (increment or decrement).
 */
const updateCounters = (
  stat: StatType,
  field: keyof CounterFields,
  operation: 'create' | 'delete',
) => {
  if (operation === 'create') {
    stat[field] += 1;
  } else if (operation === 'delete') {
    stat[field] -= 1;
  }
};

/**
 * Updates the Stat document based on the operation and collection type.
 *
 * This function finds the existing Stat document and updates the relevant counter fields
 * based on the operation (create or delete) and the collection type (company, promotion, or category).
 * If no Stat document exists, it creates a new one with the initial values.
 *
 * @param {UpdateStatsParams} params - The parameters for updating the stats.
 * @param {'create' | 'delete'} params.operation - The operation to perform.
 * @param {'company' | 'promotion' | 'category'} params.collection - The collection type to update.
 * @param {CompanyStatus} [params.companyStatus] - The status of the company (required for company operations).
 * @throws Will throw an error if there is an issue with the database operation or if the collection type is invalid.
 */
const updateStats = async ({
  operation,
  collection,
  companyStatus,
}: UpdateStatsParams) => {
  try {
    const stat: StatType | null = await Stat.findOne({});

    if (stat) {
      switch (collection) {
        case 'company':
          updateCounters(stat, 'newCompanies', operation);
          if (companyStatus === CompanyStatus.Active) {
            updateCounters(stat, 'activeCompanies', operation);
          }
          break;
        case 'promotion':
          updateCounters(stat, 'promotions', operation);
          break;
        case 'category':
          updateCounters(stat, 'categories', operation);
          break;
        default:
          throw new Error('Invalid type collection');
      }
      await stat.save();
    } else {
      const initialStat: Record<keyof CounterFields, number> = {
        promotions: 0,
        categories: 0,
        newCompanies: 0,
        activeCompanies: 0,
      };

      switch (collection) {
        case 'company':
          initialStat.newCompanies = operation === 'create' ? 1 : 0;
          initialStat.activeCompanies =
            operation === 'create' && status === CompanyStatus.Active ? 1 : 0;
          break;
        case 'promotion':
          initialStat.promotions = operation === 'create' ? 1 : 0;
          break;
        case 'category':
          initialStat.categories = operation === 'create' ? 1 : 0;
          break;
        default:
          throw new Error('Invalid type collection');
      }

      await Stat.create(initialStat);
    }
  } catch (error) {
    console.error('Error updating stats:', error);
  }
};

export default updateStats;
