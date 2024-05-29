import { ObjectId } from 'mongoose';

/**
 * Aggregates and counts occurrences of specified identifiers in an array of records.
 *
 * @param {I[]} items - An array of records to process.
 * @param {keyof I} idKey - The key in the records that identifies the property to count.
 * @param {string} nestedKey - The nested key to extract the id from.
 * @returns {Record<string, number>} An object mapping each identifier to its occurrence count.
 * @template I - The record type.
 */
export const getCountById = <I>(
  items: I[],
  idKey: keyof I,
  nestedKey: string = '_id',
): Record<string, number> =>
  items.reduce<Record<string, number>>((counts, item) => {
    const nestedObject = item[idKey];

    if (
      nestedObject &&
      typeof nestedObject === 'object' &&
      nestedKey in nestedObject
    ) {
      const id = (nestedObject as Record<string, any>)[nestedKey]?.toString();
      if (!id) return counts;
      if (!counts[id]) counts[id] = 0;
      counts[id] += 1;
    }
    return counts;
  }, {});
