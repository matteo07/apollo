import type * as Types from 'lib/graphql/types.generated';

export type GetBookQueryVariables = Types.Exact<{
  bookId: Types.Scalars['Int']['input'];
}>;


export type GetBookQuery = { __typename?: 'Query', book: { __typename?: 'Book', title: string, author: { __typename?: 'Author', firstName: string, lastName: string } } };

export type ItemFragmentFragment = { __typename?: 'Book', id: number, title: string, author: { __typename?: 'Author', id?: number | null, firstName: string, lastName: string } };

export type GetCategoryQueryVariables = Types.Exact<{
  categorySlug: Types.Scalars['String']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', title: string, description: string, items: Array<{ __typename?: 'Book', id: number, title: string, author: { __typename?: 'Author', id?: number | null, firstName: string, lastName: string } }> } };

export type GetCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', title: string, description: string, slug: string }> };

export type GetRecommendationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecommendationsQuery = { __typename?: 'Query', recommendations: Array<{ __typename?: 'Recommendation', id: number, title: string, description: string, items: Array<{ __typename?: 'Book', id: number, title: string, author: { __typename?: 'Author', id?: number | null, firstName: string, lastName: string } }> }> };

export type GetAuthorQueryVariables = Types.Exact<{
  authorId: Types.Scalars['Int']['input'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', firstName: string, lastName: string, bio: string, books: Array<{ __typename?: 'Book', id: number, title: string }> } };
