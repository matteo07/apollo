import {ApolloServer} from '@apollo/server';
import {nextHandler} from '@lib/nextHandler';
import type {
    AuthorServiceResponse,
    Book,
    CategoryServiceResponse,
    RecommendationServiceResponse
} from '@lib/graphql/types';
import {typeDefs} from '@lib/graphql/types';
import {
    authorByIdResolver,
    bookByIdResolver,
    booksResolver,
    categoriesResolver,
    categoryBySlugResolver,
    recommendationsResolver
} from '@lib/graphql/resolvers';

const resolvers = {
    Query: {
        author: authorByIdResolver,
        book: bookByIdResolver,
        books: booksResolver,
        category: categoryBySlugResolver,
        categories: categoriesResolver,
        recommendations: recommendationsResolver,
    },
    Author: {
        books: async (authorContext: AuthorServiceResponse) => await booksResolver(undefined, {authorId: authorContext.id})
    },
    Book: {
        author: async (bookContext: Book) => await authorByIdResolver(undefined, {id: bookContext.author})
    },
    Category: {
        items: async (categoryContext: CategoryServiceResponse) => await booksResolver(undefined, {ids: categoryContext.items})
    },
    Recommendation: {
        items: async (recommendationContext: RecommendationServiceResponse) => await booksResolver(undefined, {ids: recommendationContext.items})
    }
};

const server = new ApolloServer({typeDefs, resolvers});

export default nextHandler(server);