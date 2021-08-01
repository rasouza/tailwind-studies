import { axios } from "src/lib/axios";

import { Hero } from "../types";

export function getHero(id: number): Promise<Hero> {
  return axios.get(`/${id}`);
}
