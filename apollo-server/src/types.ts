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

export type RootValue = unknown

export interface BookByIdArgument {
    id: number
}

export interface BooksByIdsArgument {
    ids?: string[]
    authorId?: number
}

export interface AuthorByIdArgument {
    id: number
}

export interface CategoryBySlugArgument {
    slug: string
}

export const BOOK_SERVICE_BASE_URL = 'http://localhost:8091/'
export const CATEGORIZATION_SERVICE_BASE_URL = 'http://localhost:8092/'
