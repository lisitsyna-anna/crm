import Company from '@/models/company';
import Promotion from '@/models/promotion';
import mongoose from 'mongoose';

/**
 * Updates the `hasPromotions` field for a specified company.
 *
 * This function counts the number of promotions associated with the given company ID.
 * If the count is greater than 0, it sets `hasPromotions` to true; otherwise, it sets it to false.
 * The function then updates the company document with the new value.
 *
 * @param {mongoose.Types.ObjectId} companyId - The ID of the company to update.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 * @throws {Error} Throws an error if there is an issue with the database operation.
 */
const updateHasPromotions = async (companyId: mongoose.Types.ObjectId) => {
  try {
    const promotionsCount = await Promotion.countDocuments({
      company: companyId,
    });
    const hasPromotions = promotionsCount > 0;
    await Company.findByIdAndUpdate(companyId, { hasPromotions });
  } catch (error) {
    console.error('Error updating hasPromotions:', error);
  }
};

export default updateHasPromotions;
