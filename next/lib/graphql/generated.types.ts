export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
}

export type Author = {
    __typename?: 'Author'
    bio: Scalars['String']['output']
    books: Array<Book>
    firstName: Scalars['String']['output']
    id?: Maybe<Scalars['Int']['output']>
    lastName: Scalars['String']['output']
}

export type Book = {
    __typename?: 'Book'
    author: Author
    id: Scalars['Int']['output']
    title: Scalars['String']['output']
    year: Scalars['Int']['output']
}

export type Category = {
    __typename?: 'Category'
    description: Scalars['String']['output']
    items: Array<Book>
    slug: Scalars['String']['output']
    title: Scalars['String']['output']
}

export type Query = {
    __typename?: 'Query'
    author: Author
    book: Book
    books: Array<Book>
    categories: Array<Category>
    category: Category
    recommendations: Array<Recommendation>
}

export type QueryAuthorArgs = {
    id: Scalars['Int']['input']
}

export type QueryBookArgs = {
    id: Scalars['Int']['input']
}

export type QueryBooksArgs = {
    id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type QueryCategoryArgs = {
    slug?: InputMaybe<Scalars['String']['input']>
}

export type Recommendation = {
    __typename?: 'Recommendation'
    description: Scalars['String']['output']
    id: Scalars['Int']['output']
    items: Array<Book>
    title: Scalars['String']['output']
}
