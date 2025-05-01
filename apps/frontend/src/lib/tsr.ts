import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { contracts } from '@repo/api-contracts';

export const tsr = initTsrReactQuery(contracts, {
  baseUrl: 'http://localhost:3001',
  baseHeaders: {},
});