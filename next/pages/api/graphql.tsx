import { ApolloServer } from '@apollo/server';
import { nextHandler } from '@lib/nextHandler';
import type {Book, Category} from '@lib/graphql/types';
import { typeDefs } from '@lib/graphql/types';
import {
  authorByIdResolver,
  bookByIdResolver,
  booksResolver,
  categoriesResolver,
   recommendationsResolver
} from '@lib/graphql/resolvers';


// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    books: booksResolver,
    book: bookByIdResolver,
    author: authorByIdResolver,
    categories: categoriesResolver,
    recommendations: recommendationsResolver,
  },
  Book: {
    author: async (context: Book) => await authorByIdResolver(undefined, { id: context.author })
  },
  Category: {
    books: async (context: Category) => await booksResolver(undefined)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export default nextHandler(server);