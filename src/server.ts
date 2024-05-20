import { ApolloServer } from 'apollo-server-lambda';
import {schema} from '../schema/schema'
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from "@prisma/client";


// set schemas, and map decoded to context
const server = new ApolloServer({
  schema: schema,
  context: ({ event, context }) => {
    // populate decoded
    context.decoded = {};
    if (event?.requestContext?.authorizer) {
      context.decoded = event.requestContext.authorizer;
    }
    context.decoded.isOffline = event.isOffline;
    // populate metadata
    context.request_id = `request_${uuidv4()}`;
    context.request_time = new Date().toISOString();
    // context.entrypoint = 'client';
    // return context
    return context;
  },
  formatResponse: (response: object) => {
    return response;
  },
  formatError: (error: any) => {
    return error;
  },
//   introspection: true,
});

// allow cors origin '*'
export const graphqlHandler = server.createHandler();

export const prisma = new PrismaClient();