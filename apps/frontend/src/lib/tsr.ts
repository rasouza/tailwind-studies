import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { userContract } from '@repo/api-contracts';

export const tsr = initTsrReactQuery(userContract, {
  baseUrl: 'http://localhost:3001',
  baseHeaders: {},
});