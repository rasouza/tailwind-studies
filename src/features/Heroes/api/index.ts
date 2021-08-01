import { range } from "lodash/fp";

import { axios } from "src/lib/axios";

import { Hero } from "../types";

export const LAST_HERO = 731;
export const PAGE_SIZE = 30;

export function getHero(id: number): Promise<Hero> {
  return axios.get(`/${id}`);
}

export function getHeroesByPage(page = 1, size = PAGE_SIZE): Promise<Hero[]> {
  const ids = range(size * (page - 1) + 1, size * page + 1);
  const requests = ids.map((id: number) => getHero(id));
  return Promise.all(requests);
}
