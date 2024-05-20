import { arg, extendType, inputObjectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../../src/server';
import { UserType } from '../users';

export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: UserType,
      args: {
        body : arg({ type: 'RegisterUserInputType'}),
      },
      resolve: (_, {  body }, ctx) => {
        console.log("--body--",body);
        
        // Your logic to create a new user
    //    return prisma.user.create({
    //         data :{
                
    //              email ,
                 
    //              id :uuidv4(),
    //         }
    //     })
        
      },
    });
  },
});



export const RegisterUserInputType = inputObjectType({
    name: 'RegisterUserInputType',
    definition(t) {
        t.string('fullname');
        t.string('email');
        t.string('companyName');
        t.string('password');
      },
  })

