export const schema = `#graphql
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
