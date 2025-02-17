import {
    AuthorByIdArgument,
    AuthorServiceResponse,
    Book,
    BOOK_SERVICE_BASE_URL,
    BookByIdArgument,
    BooksByIdsArgument,
    CATEGORIZATION_SERVICE_BASE_URL,
    CategoryBySlugArgument,
    CategoryServiceResponse,
    RecommendationServiceResponse,
    RootValue,
} from './types.js'

/*
--------------------------- BOOKS SERVICE RESOLVERS ---------------------------
 */
const getData = async (path: string, baseUrl: string) => {
    console.log('fetching GET ' + baseUrl + path)
    return await (await fetch(baseUrl + path)).json()
}

const getBookServiceData = async (path: string) => await getData(path, BOOK_SERVICE_BASE_URL)
const getCategorizationServiceData = async (path: string) => await getData(path, CATEGORIZATION_SERVICE_BASE_URL)

/*
--------------------------- BOOKS SERVICE RESOLVERS ---------------------------
 */
export const booksResolver = async (_: RootValue, { ids, authorId }: BooksByIdsArgument) => {
    const qp = ids ? `?ids=${ids.join(',')}` : ''
    const authorQp = authorId ? `?authorId=${authorId}` : ''
    return await getBookServiceData(`book${authorQp ? authorQp : qp}`)
}

const bookByIdResolver = async (_: RootValue, { id }: BookByIdArgument): Promise<Book | null> =>
    (await getBookServiceData(`book/${id}`)) as Book

const authorCache: Record<number, AuthorServiceResponse | undefined> = {}
const authorByIdResolver = async (_: RootValue, { id }: AuthorByIdArgument): Promise<AuthorServiceResponse | null> => {
    if (authorCache[id] !== undefined) {
        return authorCache[id]
    }
    authorCache[id] = (await getBookServiceData(`author/${id}`)) as AuthorServiceResponse
    return authorCache[id]
}
/*
--------------------------- CATEGORIZATION SERVICE RESOLVERS ---------------------------
 */
const categoriesResolver = async (): Promise<CategoryServiceResponse[] | null> =>
    (await getCategorizationServiceData(`category`)) as CategoryServiceResponse[]

const categoryBySlugResolver = async (
    _: RootValue,
    { slug }: CategoryBySlugArgument,
): Promise<CategoryServiceResponse | null> =>
    (await getCategorizationServiceData(`category/${slug}`)) as CategoryServiceResponse

const recommendationsResolver = async (): Promise<RecommendationServiceResponse | null> =>
    (await getCategorizationServiceData('recommendation')) as RecommendationServiceResponse

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
        books: async (authorContext: AuthorServiceResponse) =>
            await booksResolver(undefined, { authorId: authorContext.id }),
    },
    Book: {
        author: async (bookContext: Book) => await authorByIdResolver(undefined, { id: bookContext.author }),
    },
    Category: {
        items: async (categoryContext: CategoryServiceResponse) =>
            await booksResolver(undefined, { ids: categoryContext.items }),
    },
    Recommendation: {
        items: async (recommendationContext: RecommendationServiceResponse) =>
            await booksResolver(undefined, { ids: recommendationContext.items }),
    },
}
