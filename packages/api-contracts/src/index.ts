import { initContract } from '@ts-rest/core';
import { usersContract } from './users.js'

const c = initContract();
export const contracts = c.router({
  users: usersContract
})