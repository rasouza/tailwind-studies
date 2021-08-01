import { useQuery } from "react-query";

import { getHero } from "../api";

export const useHero = (heroId: number) =>
  useQuery(["hero", heroId], () => getHero(heroId));
