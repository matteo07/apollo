export type Book = {
  id: number
  title: string
  author: number
}

export type RootValue = unknown

export interface BookByIdArgument {
  id: number;
}

export interface AuthorByIdArgument {
  id: number;
}


export const typeDefs = `#graphql

type Author {
    _id: Int
    firstName: String
    lastName: String
}

type Book {
    id: Int
    title: String
    author: Author
}

type Query {
    books: [Book]
    book(id: Int): Book
    author(id: Int): Author
}
`;

export const REST_BASE_URL = 'http://localhost:8091/';
