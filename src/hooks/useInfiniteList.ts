import React from 'react';
import useSWR from 'swr';
import { Pagination } from '@/shared-types/pagination';
import dayjs from 'dayjs';

interface UseInfiniteListProps<T, Q> {
  fetcherKey: string; // SWR key
  initialQuery: Q; // Initial query state
  fetcher: (query: Q) => Promise<{ data: T[]; pagination: Pagination }>;
}

export const useInfiniteList = <T, Q>({
  fetcherKey,
  initialQuery,
  fetcher,
}: UseInfiniteListProps<T, Q>) => {
  const [random, setRandom] = React.useState(0);
  const [query, setQuery] = React.useState<Q>(initialQuery);
  const [pagination, setPagination] = React.useState<Pagination>({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  });
  const [listData, setListData] = React.useState<T[][]>([]);

  const { isLoading, mutate } = useSWR(
    [fetcherKey, query, random],
    async () => {
      const { data, pagination } = await fetcher(query);
      setPagination(pagination);
      setListData((prev) => {
        const newData = [...prev];
        newData[pagination.page - 1] = data; // Organize data by page

        if (pagination.page === 1) {
          // remove page 2 and above data when fetching page 1 since it's a new query
          newData.splice(1);
        }

        return newData;
      });
    }
  );

  const clearCache = () => {
    setRandom(dayjs().toDate().getTime());
  };

  // Flattened list for easier rendering
  const items = listData.flat();

  // Function to update query (e.g., for pagination or filters)
  const updateQuery = (newQuery: Partial<Q>) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      ...newQuery,
      page: 1,
    }));
  };

  const resetListData = () => {
    setQuery({ ...initialQuery });
    mutate();
    setListData((prev) => [prev[0]]);
  };

  const loadNextPage = () => {
    if (pagination.page < pagination.totalPages) {
      setQuery((query) => ({ ...query, page: pagination.page + 1 }));
    }
  };

  return {
    items,
    isLoading,
    setListData,
    query,
    updateQuery,
    resetListData,
    loadNextPage,
    clearCache,
  };
};
