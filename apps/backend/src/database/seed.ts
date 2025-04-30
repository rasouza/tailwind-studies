import { userFactory } from './factories/user';

(async () => {
  await userFactory.create();
})().catch((e) => {
  console.error(e);
});
