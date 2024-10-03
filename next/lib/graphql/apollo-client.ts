import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { APOLLO_SERVER_URL } from '../../../ENV'

const createApolloClient = () =>
    new ApolloClient({
        uri: APOLLO_SERVER_URL,
        cache: new InMemoryCache(),
        headers: {
            'content-type': 'application/json',
            'apollo-require-preflight': 'true',
        },
        link: new HttpLink({
            uri: APOLLO_SERVER_URL,
            fetchOptions: { mode: 'cors' },
            headers: {
                'apollo-require-preflight': 'true',
            },
        }),
    })

export default createApolloClient
