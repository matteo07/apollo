import type {
    AuthorByIdArgument, AuthorServiceResponse,
    Book,
    BookByIdArgument, BooksByIdsArgument,
    CategoryBySlugArgument, CategoryServiceResponse, RecommendationServiceResponse,
    RootValue
} from '@lib/graphql/types';
import {BOOK_SERVICE_BASE_URL, CATEGORIZATION_SERVICE_BASE_URL} from '@lib/graphql/types';

const getData = async (path: string, baseUrl: string) => await (await fetch(baseUrl + path)).json();

const getBookServiceData = async (path: string) => await getData(path, BOOK_SERVICE_BASE_URL)
const getCategorizationServiceData = async (path: string) => await getData(path, CATEGORIZATION_SERVICE_BASE_URL)

// BOOKS SERVICE RESOLVERS
export const booksResolver = async (_: RootValue, {ids, authorId}: BooksByIdsArgument) => {
    const qp = ids ? `?ids=${ids.join(',')}` : ''
    const authorQp = authorId ? `?authorId=${authorId}` : ''
    return await getBookServiceData(`book${authorQp ? authorQp : qp}`)
};

const bookByIdResolver = async (_: RootValue, {id}: BookByIdArgument): Promise<Book | null> => await getBookServiceData(`book/${id}`);
const authorByIdResolver = async (_: RootValue, {id}: AuthorByIdArgument): Promise<Book | null> => await getBookServiceData(`author/${id}`);

// CATEGORIZATION SERVICE RESOLVERS
const categoriesResolver = async (_: RootValue): Promise<CategoryServiceResponse[] | null> => await getCategorizationServiceData(`category`);
const categoryBySlugResolver = async (_: RootValue, {slug}: CategoryBySlugArgument): Promise<CategoryServiceResponse | null> => await getCategorizationServiceData(`category/${slug}`);
const recommendationsResolver = async (_: RootValue): Promise<Book | null> => await getCategorizationServiceData('recommendation');

export const resolvers = {
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