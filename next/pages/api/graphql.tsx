import { ApolloServer } from "@apollo/server";
import { nextHandler } from '@lib/nextHandler';

type Book = {
  id: number
  title: string
  author: string
}

const books: Book[] = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Construct a schema, using GraphQL schema language
const typeDefs = `#graphql
type Book {
    id: Int
    title: String
    author: String
}

type Query {
    hello: String
    books: [Book]
    book(id: Int): Book
}
`;

type RootValue = unknown
interface BookByIdArgument  {
  id: number
}

const bookByIdResolver = (parent: RootValue, {id}: BookByIdArgument ): Book | null =>
  ( books?.find(({ id: bookId }) => bookId === id ) ?? null)

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    books: () => books,
    book: bookByIdResolver
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default nextHandler(server);