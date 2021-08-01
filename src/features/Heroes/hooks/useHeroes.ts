import { QueryFunction, useInfiniteQuery } from "react-query";

import { getHeroesByPage, PAGE_SIZE, LAST_HERO } from "../api";
import { Hero } from "../types";

const getNextPage = (size: number) => (lastPage: Hero[]) => {
  const lastId = Number(lastPage[lastPage.length - 1].id);
  const currentPage = lastId / size;

  if (lastId >= LAST_HERO) return undefined;

  return currentPage + 1;
};

export const useHeroes = (size = PAGE_SIZE) => {
  const queryFn: QueryFunction<Hero[]> = ({ pageParam, queryKey: [, size] }) =>
    getHeroesByPage(pageParam, size as number);
  const queryKey = ["heroes", size];

  return useInfiniteQuery<Hero[], Error>({
    queryFn,
    queryKey,
    getNextPageParam: getNextPage(size),
  });
};
