import { extendType, objectType, stringArg } from 'nexus';
import { prisma } from '../../src/server';



export const Query = extendType({
  type: 'Query',
  definition(t) {
    t.field('getUser', {
      type: UserType,
      args: { id: stringArg() },
      resolve: (_, { id }, ctx) => {
        
        const getuser = async ()=>{
            const user = await prisma.user.findFirst({
              where: {
               id:id,
              }
            });
            return user
            
        }
       return getuser()    
        
      },
    });
    t.list.field('getAllUsers', {
      type: UserType,
      resolve: (_, __, ctx) => {
        return prisma.user.findMany();
      },
    });
  },
});


// export const Mutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.field('createUser', {
//       type: 'User',
//       args: {
//         name: stringArg(),
//         email: stringArg(),
//       },
//       resolve: (_, { name, email }, ctx) => {
//         // Your logic to create a new user
//        return prisma.user.create({
//             data :{
                
//                  email ,
//                  name,
//                  id :uuidv4(),
//             }
//         })
        
//       },
//     });
//   },
// });


export const UserType = objectType({
    name: 'User',
    definition(t) {
      t.id('id');
      t.string('name');
      t.string('email');
      t.string('createdAt');
      t.string('updatedAt');
    },
  });