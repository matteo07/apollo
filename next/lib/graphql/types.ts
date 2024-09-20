export type Book = {
  id: number
  title: string
  author: number
}

export type CategoryServiceResponse  ={
    slug: string
    title: string
    description: string
    booksIds: string[]
}


export type Category  ={
    slug: string
    title: string
    description: string
    books: Book[]
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

type Category {
    slug: String
    title: String
    description: String
    books: [Book]    
}

type Recommendation {
    items: [Book]
    title: String
    description: String
}

type Query {
    books: [Book]
    book(id: Int): Book
    author(id: Int): Author
    categories: [Category]
    category(slug: String): Category
    recommendations: [Recommendation]
}
`;

export const BOOK_SERVICE_BASE_URL = 'http://localhost:8091/';
export const CATEGORIZATION_SERVICE_BASE_URL = 'http://localhost:8092/';

