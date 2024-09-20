import type {
    AuthorByIdArgument,
    Book,
    BookByIdArgument, BooksByIdsArgument,
    CategoryBySlugArgument, CategoryServiceResponse,
    RootValue
} from '@lib/graphql/types';
import {BOOK_SERVICE_BASE_URL, CATEGORIZATION_SERVICE_BASE_URL} from '@lib/graphql/types';

const getData = async (path: string, baseUrl: string) => await (await fetch(baseUrl + path)).json();

const getBookServiceData = async (path: string) => await getData(path, BOOK_SERVICE_BASE_URL)
const getCategorizationServiceData = async (path: string) => await getData(path, CATEGORIZATION_SERVICE_BASE_URL)

// BOOKS SERVICE RESOLVERS
export const booksResolver = async (_: RootValue, {ids}: BooksByIdsArgument) => {
    const qp = ids ? `?ids=${ids.join(',')}` : ''
    return await getBookServiceData(`book${qp}`)
};

export const bookByIdResolver = async (_: RootValue, {id}: BookByIdArgument): Promise<Book | null> => await getBookServiceData(`book/${id}`);
export const authorByIdResolver = async (_: RootValue, {id}: AuthorByIdArgument): Promise<Book | null> => await getBookServiceData(`author/${id}`);

// CATEGORIZATION SERVICE RESOLVERS
export const categoriesResolver = async (_: RootValue): Promise<CategoryServiceResponse[] | null> => await getCategorizationServiceData(`category`);
export const categoryBySlugResolver = async (_: RootValue, {slug}: CategoryBySlugArgument): Promise<CategoryServiceResponse | null> => await getCategorizationServiceData(`category/${slug}`);
export const recommendationsResolver = async (_: RootValue): Promise<Book | null> => await getCategorizationServiceData('recommendation');