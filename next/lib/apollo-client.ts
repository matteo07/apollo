import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:8080",
        cache: new InMemoryCache(),

        link: new HttpLink({
            uri: "http://localhost:8080",
            fetchOptions: {
                mode: 'no-cors'
            }
        })
    });
};

export default createApolloClient;