import { object, string } from 'yup';
import { createRouter } from '../router/create-router';

export const helloAppRouter = createRouter().query('greeting', {
  input: object({
    text: string().required(),
  }),
  output: object({
    greeting: string().required(),
  }),
  async resolve({ input, ctx: { opts } }) {
    // const user = await prisma.user.findFirst({
    //   where: {
    //     email: "example@user.com"
    //   }
    // });
    console.log('opts: ', opts);
    return {
      greeting: `Hello, ${input.text || 'User'}!`, //${input?.text ?? 'world'} from ${user?.name}`,
    };
  },
});
