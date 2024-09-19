import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import { Exact, InputMaybe, Scalars } from './types';

const defaultOptions = {} as const;
export type GetBookQueryVariables = Exact<{
  bookId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetBookQuery = {
  __typename?: 'Query',
  book?: {
    __typename?: 'Book',
    title?: string | null,
    author?: { __typename?: 'Author', firstName?: string | null } | null
  } | null
};


export const GetBookDocument = gql`
    query getBook($bookId: Int) {
        book(id: $bookId) {
            title
            author {
                firstName
            }
        }
    }
`;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions?: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
}

export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
}

export function useGetBookSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
}

export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookSuspenseQueryHookResult = ReturnType<typeof useGetBookSuspenseQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;