/**
 * Aggregates and counts occurrences of specified identifiers in an array of records.
 *
 * @param {I[]} items - An array of records to process.
 * @param {T} idKey - The key in the records that identifies the property to count.
 * @returns {Record<string, number>} An object mapping each identifier to its occurrence count.
 * @template T - The type constraint ensuring `idKey` exists on `I`.
 * @template I - The record type with a string index signature.
 */
export const getCountById = <T extends string, I extends Record<T, string>>(
  items: I[],
  idKey: T,
): Record<string, number> =>
  items.reduce<Record<string, number>>((counts, { [idKey]: id }) => {
    if (!counts[id]) counts[id] = 0;
    counts[id] += 1;
    return counts;
  }, {});
