import { useQuery } from "react-query";

import { getHero } from "../api";
import { Hero } from "../types";

export const useHero = (heroId: number) =>
  useQuery<Hero, Error>(["hero", heroId], () => getHero(heroId));
