import fetch from 'node-fetch';
import { date, InferType, number, object, string } from 'yup';
import { createRouter } from '../router/create-router';

let userSchema = object({
  id: number().required(),
  name: string().required(),
  email: string().email().nullable(),
  blog: string().url().nullable(),
  created_at: date().default(() => new Date()),
});

// parse and assert validity
// const user = await userSchema.validate(await fetchUser());

export interface IGithubUsersDto extends InferType<typeof userSchema> {}

export const githubAppRouter = createRouter().query('users', {
  output: userSchema,
  async resolve({ input, ctx: { opts } }) {
    // const user = await prisma.user.findFirst({
    //   where: {
    //     email: "example@user.com"
    //   }
    // });
    console.log('opts: ', opts);
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();
    const user = await userSchema.validate(data);
    console.log('Valid Data:', user);

    return user;
  },
});
