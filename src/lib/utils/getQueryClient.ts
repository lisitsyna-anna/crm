import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

/**
 * Returns a singleton instance of QueryClient.
 *
 * This function uses a caching mechanism to ensure that only one instance of
 * QueryClient is created and reused throughout the application. It leverages
 * React's `cache` utility to memoize the creation of the QueryClient.
 *
 * @returns {QueryClient} - A single instance of QueryClient.
 */
export const getQueryClient = cache(
  () => new QueryClient(),
) as () => QueryClient;
