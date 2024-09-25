export type Book = {
    id: number
    title: string
    author: number
}

export type CategoryServiceResponse = {
    slug: string
    title: string
    description: string
    items: string[]
}

export type RecommendationServiceResponse = {
    id: number
    title: string
    description: string
    items: string[]
}

export type AuthorServiceResponse = {
    id: number
    firstName: string
    lastName: string
    bio: string
    books: string[]
}

export type Category = {
    slug: string
    title: string
    description: string
    items: Book[]
}

export type RootValue = unknown

export interface BookByIdArgument {
    id: number;
}

export interface BooksByIdsArgument {
    ids?: string[];
    authorId?: number;
}

export interface AuthorByIdArgument {
    id: number;
}

export interface CategoryBySlugArgument {
    slug: string;
}

export const typeDefs = `#graphql

type Author {
    id: Int
    firstName: String!
    lastName: String!
    bio: String!
    books: [Book!]!
}

type Book {
    id: Int!
    title: String!
    author: Author!
}

type Category {
    description: String!
    items: [Book!]!
    slug: String!
    title: String!
}

type Recommendation {
    description: String!
    id: Int!
    items: [Book!]!
    title: String!
}

type Query {
    books(id: [Int]): [Book!]!
    book(id: Int!): Book!
    author(id: Int!): Author!
    categories: [Category!]!
    category(slug: String): Category!
    recommendations: [Recommendation!]!
}
`;

export const BOOK_SERVICE_BASE_URL = 'http://localhost:8091/';
export const CATEGORIZATION_SERVICE_BASE_URL = 'http://localhost:8092/';

