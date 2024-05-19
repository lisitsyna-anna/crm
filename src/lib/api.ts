import {
  Category,
  Company,
  Country,
  Promotion,
  SummarySales,
  SummaryStats,
} from '@/types';

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

/**
 * Constructs a URL using an array of path segments.
 *
 * @param {string[]} paths - An array of path segments to be appended to the base URL.
 * @returns {string} The full URL constructed from the base URL followed by the provided path segments.
 */
const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

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
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) =>
  sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);

export const getSummarySales = (init?: RequestInit) =>
  sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);

export const getCountries = (init?: RequestInit) =>
  sendRequest<Country[]>(buildUrl('countries'), init);

export const getCategories = (init?: RequestInit) =>
  sendRequest<Category[]>(buildUrl('categories'), init);

export const getCompanies = (init?: RequestInit) =>
  sendRequest<Company[]>(buildUrl('companies'), init);

export const getCompany = (id: string, init?: RequestInit) =>
  sendRequest<Company>(buildUrl('companies', id), init);

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) =>
  sendRequest<Promotion[]>(
    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
    init,
  );

export const createCompany = async (
  data: Omit<Company, 'id' | 'hasPromotions'>,
  init?: RequestInit,
) =>
  sendRequest<Company>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });

export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit,
) =>
  sendRequest<Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
