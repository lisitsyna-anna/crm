import { CategoryType } from '@/models/category';
import { CompanyType, PopulatedCompanyType } from '@/models/company';
import { CountryType } from '@/models/country';
import { StatType } from '@/models/stat';
import { PopulatedSaleType } from '@/models/sale';
import { PopulatedPromotionType, PromotionType } from '@/models/promotion';
import { Document } from 'mongoose';

/**
 * Constructs a URL using an array of path segments.
 *
 * @param {string[]} paths - An array of path segments to be appended to the base URL.
 * @returns {string} The full URL constructed from the base URL followed by the provided path segments.
 */
const buildUrl = (...paths: string[]) =>
  `http://localhost:3000/api/${paths.join('/')}`;

/**
 * Converts an object containing query parameters into a URL-encoded string.
 *
 * @param {Record<string, string>} params - An object where each key-value pair represents a query parameter.
 * @returns {string} A URL-encoded string of query parameters.
 */
const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

/**
 * Sends an HTTP request using Next.js's built-in fetch function and returns the parsed JSON response.
 * This fetch function is optimized for use within Next.js environments, potentially including server-side rendering.
 *
 * @param {string} url - The URL to send the request to.
 * @param {RequestInit} [init] - Optional Fetch API configuration options to customize the request.
 * @returns {Promise<T>} A promise that resolves with the parsed JSON response as type T.
 * @template T - The expected type of the JSON response.
 * @throws {Error} Throws an error if the HTTP response is not OK, containing the response text as error message.
 */
const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error('Error in sendRequest');
  }

  return (await res.json()) as T;
};

// WORk
export const getSummaryStats = (init?: RequestInit) =>
  sendRequest<StatType>(buildUrl('summary-stats'), init);

// WORK
export const getSummarySales = (init?: RequestInit) =>
  sendRequest<PopulatedSaleType[]>(buildUrl('summary-sales'), init);

export const getCountries = (init?: RequestInit) =>
  sendRequest<CountryType[]>(buildUrl('countries'), init);

// WORK
export const getCategories = (init?: RequestInit) =>
  sendRequest<CategoryType[]>(buildUrl('categories'), init);

// WORK
export const getCompanies = (init?: RequestInit) =>
  sendRequest<PopulatedCompanyType[]>(buildUrl('companies'), init);

// WORK
export const getCompany = (id: string, init?: RequestInit) =>
  sendRequest<PopulatedCompanyType>(buildUrl('companies', id), init);

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) =>
  sendRequest<PopulatedPromotionType[]>(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );

export const createCompany = async (
  data: Omit<CompanyType, keyof Document | 'hasPromotions'>,
  init?: RequestInit,
) =>
  sendRequest<CompanyType>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });

export const createPromotion = async (
  data: Omit<PromotionType, keyof Document>,
  init?: RequestInit,
) =>
  sendRequest<PromotionType>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
