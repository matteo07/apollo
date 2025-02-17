import type * as GeneratedTypes from 'lib/graphql/generated.operations'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export const ItemFragmentFragmentDoc = gql`
    fragment ItemFragment on Book {
        id
        title
        author {
            id
            firstName
            lastName
        }
    }
`
export const GetBookDocument = gql`
    query getBook($bookId: Int!) {
        book(id: $bookId) {
            title
            year
            author {
                firstName
                lastName
            }
        }
    }
`

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
export function useGetBookQuery(
    baseOptions: Apollo.QueryHookOptions<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables> &
        ({ variables: GeneratedTypes.GetBookQueryVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>(GetBookDocument, options)
}
export function useGetBookLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>(
        GetBookDocument,
        options,
    )
}
export function useGetBookSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>(
        GetBookDocument,
        options,
    )
}
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>
export type GetBookSuspenseQueryHookResult = ReturnType<typeof useGetBookSuspenseQuery>
export type GetBookQueryResult = Apollo.QueryResult<GeneratedTypes.GetBookQuery, GeneratedTypes.GetBookQueryVariables>
export const GetCategoryDocument = gql`
    query getCategory($categorySlug: String!) {
        category(slug: $categorySlug) {
            slug
            title
            description
            items {
                ...ItemFragment
            }
        }
    }
    ${ItemFragmentFragmentDoc}
`

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useGetCategoryQuery(
    baseOptions: Apollo.QueryHookOptions<GeneratedTypes.GetCategoryQuery, GeneratedTypes.GetCategoryQueryVariables> &
        ({ variables: GeneratedTypes.GetCategoryQueryVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GeneratedTypes.GetCategoryQuery, GeneratedTypes.GetCategoryQueryVariables>(
        GetCategoryDocument,
        options,
    )
}
export function useGetCategoryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GeneratedTypes.GetCategoryQuery,
        GeneratedTypes.GetCategoryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GeneratedTypes.GetCategoryQuery, GeneratedTypes.GetCategoryQueryVariables>(
        GetCategoryDocument,
        options,
    )
}
export function useGetCategorySuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GeneratedTypes.GetCategoryQuery,
        GeneratedTypes.GetCategoryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GeneratedTypes.GetCategoryQuery, GeneratedTypes.GetCategoryQueryVariables>(
        GetCategoryDocument,
        options,
    )
}
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>
export type GetCategorySuspenseQueryHookResult = ReturnType<typeof useGetCategorySuspenseQuery>
export type GetCategoryQueryResult = Apollo.QueryResult<
    GeneratedTypes.GetCategoryQuery,
    GeneratedTypes.GetCategoryQueryVariables
>
export const GetCategoriesDocument = gql`
    query getCategories {
        categories {
            title
            description
            slug
        }
    }
`

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GeneratedTypes.GetCategoriesQuery,
        GeneratedTypes.GetCategoriesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GeneratedTypes.GetCategoriesQuery, GeneratedTypes.GetCategoriesQueryVariables>(
        GetCategoriesDocument,
        options,
    )
}
export function useGetCategoriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GeneratedTypes.GetCategoriesQuery,
        GeneratedTypes.GetCategoriesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GeneratedTypes.GetCategoriesQuery, GeneratedTypes.GetCategoriesQueryVariables>(
        GetCategoriesDocument,
        options,
    )
}
export function useGetCategoriesSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GeneratedTypes.GetCategoriesQuery,
        GeneratedTypes.GetCategoriesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GeneratedTypes.GetCategoriesQuery, GeneratedTypes.GetCategoriesQueryVariables>(
        GetCategoriesDocument,
        options,
    )
}
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>
export type GetCategoriesQueryResult = Apollo.QueryResult<
    GeneratedTypes.GetCategoriesQuery,
    GeneratedTypes.GetCategoriesQueryVariables
>
export const GetRecommendationsDocument = gql`
    query getRecommendations {
        recommendations {
            id
            title
            description
            items {
                ...ItemFragment
            }
        }
    }
    ${ItemFragmentFragmentDoc}
`

/**
 * __useGetRecommendationsQuery__
 *
 * To run a query within a React component, call `useGetRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecommendationsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GeneratedTypes.GetRecommendationsQuery,
        GeneratedTypes.GetRecommendationsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GeneratedTypes.GetRecommendationsQuery, GeneratedTypes.GetRecommendationsQueryVariables>(
        GetRecommendationsDocument,
        options,
    )
}
export function useGetRecommendationsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GeneratedTypes.GetRecommendationsQuery,
        GeneratedTypes.GetRecommendationsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GeneratedTypes.GetRecommendationsQuery, GeneratedTypes.GetRecommendationsQueryVariables>(
        GetRecommendationsDocument,
        options,
    )
}
export function useGetRecommendationsSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GeneratedTypes.GetRecommendationsQuery,
        GeneratedTypes.GetRecommendationsQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<
        GeneratedTypes.GetRecommendationsQuery,
        GeneratedTypes.GetRecommendationsQueryVariables
    >(GetRecommendationsDocument, options)
}
export type GetRecommendationsQueryHookResult = ReturnType<typeof useGetRecommendationsQuery>
export type GetRecommendationsLazyQueryHookResult = ReturnType<typeof useGetRecommendationsLazyQuery>
export type GetRecommendationsSuspenseQueryHookResult = ReturnType<typeof useGetRecommendationsSuspenseQuery>
export type GetRecommendationsQueryResult = Apollo.QueryResult<
    GeneratedTypes.GetRecommendationsQuery,
    GeneratedTypes.GetRecommendationsQueryVariables
>
export const GetAuthorDocument = gql`
    query getAuthor($authorId: Int!) {
        author(id: $authorId) {
            firstName
            lastName
            bio
            books {
                ...ItemFragment
            }
        }
    }
    ${ItemFragmentFragmentDoc}
`

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useGetAuthorQuery(
    baseOptions: Apollo.QueryHookOptions<GeneratedTypes.GetAuthorQuery, GeneratedTypes.GetAuthorQueryVariables> &
        ({ variables: GeneratedTypes.GetAuthorQueryVariables; skip?: boolean } | { skip: boolean }),
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<GeneratedTypes.GetAuthorQuery, GeneratedTypes.GetAuthorQueryVariables>(
        GetAuthorDocument,
        options,
    )
}
export function useGetAuthorLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GeneratedTypes.GetAuthorQuery, GeneratedTypes.GetAuthorQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<GeneratedTypes.GetAuthorQuery, GeneratedTypes.GetAuthorQueryVariables>(
        GetAuthorDocument,
        options,
    )
}
export function useGetAuthorSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GeneratedTypes.GetAuthorQuery,
        GeneratedTypes.GetAuthorQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<GeneratedTypes.GetAuthorQuery, GeneratedTypes.GetAuthorQueryVariables>(
        GetAuthorDocument,
        options,
    )
}
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>
export type GetAuthorSuspenseQueryHookResult = ReturnType<typeof useGetAuthorSuspenseQuery>
export type GetAuthorQueryResult = Apollo.QueryResult<
    GeneratedTypes.GetAuthorQuery,
    GeneratedTypes.GetAuthorQueryVariables
>
