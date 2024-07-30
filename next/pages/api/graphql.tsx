import { ApolloServer } from '@apollo/server';
import { nextHandler } from '@lib/nextHandler';
import type { Book } from '@lib/graphql/types';
import { typeDefs } from '@lib/graphql/types';
import { authorByIdResolver, bookByIdResolver, booksResolver } from '@lib/graphql/resolvers';


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    books: booksResolver,
    book: bookByIdResolver,
    author: authorByIdResolver
  },
  Book: {
    author: async (context: Book) => await authorByIdResolver(undefined, { id: context.author })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export default nextHandler(server);