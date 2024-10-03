import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const createApolloClient = () =>
    new ApolloClient({
        uri: 'http://localhost:3001/api/graphql',
        cache: new InMemoryCache(),
        headers: {
            'content-type': 'application/json',
            'apollo-require-preflight': 'true',
        },
        link: new HttpLink({
            uri: 'http://localhost:3001/api/graphql',
            fetchOptions: { mode: 'cors' },
            headers: {
                'apollo-require-preflight': 'true',
            },
        }),
    })

export default createApolloClient
