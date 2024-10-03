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
    _id?: Maybe<Scalars['Int']['output']>
    firstName?: Maybe<Scalars['String']['output']>
    lastName?: Maybe<Scalars['String']['output']>
}

export type Book = {
    __typename?: 'Book'
    author?: Maybe<Author>
    id?: Maybe<Scalars['Int']['output']>
    title?: Maybe<Scalars['String']['output']>
}

export type Query = {
    __typename?: 'Query'
    author?: Maybe<Author>
    book?: Maybe<Book>
    books?: Maybe<Array<Maybe<Book>>>
}

export type QueryAuthorArgs = {
    id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryBookArgs = {
    id?: InputMaybe<Scalars['Int']['input']>
}
