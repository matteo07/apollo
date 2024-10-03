import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://localhost:3000/api/graphql',
        cache: new InMemoryCache(),

        headers: {
            'content-type': 'application/json',

            'apollo-require-preflight': 'true',
        },

        link: new HttpLink({
            uri: 'http://localhost:3000/api/graphql',
            fetchOptions: { mode: 'cors' },
            headers: {
                'apollo-require-preflight': 'true',
            },
        }),
    })
}

export default createApolloClient
