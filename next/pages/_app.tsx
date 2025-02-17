import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from '@lib/graphql/apollo-client'
import Layout from '@components/Layout'

const client = createApolloClient()
const App = ({ Component, pageProps }: AppProps) => (
    <ApolloProvider client={client}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
)

export default App
