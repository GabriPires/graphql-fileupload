import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import UploadForm from './components/UploadForm';

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4000/',
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
  );
}

export default App;
