import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from '@lib/apollo-client';

const client = createApolloClient();
const App = ({ Component, pageProps }: AppProps) => {


  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
