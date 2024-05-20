import * as path from 'path';
import { makeSchema } from 'nexus';
import * as User from './users/index'
import * as Auth from './auth/index'


export const schema = makeSchema({
  types: [
    User,
    Auth
    
  ],
  outputs: {
    schema: path.resolve(__dirname, 'generated/schema.graphql'),
    typegen: path.resolve(__dirname, 'generated/types.d.ts'),
  },
  nonNullDefaults: {
    input: false,
    output: false,
  },
});