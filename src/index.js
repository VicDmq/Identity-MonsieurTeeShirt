import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Router from './Router/index'
import { StateProvider } from './store.js'

const client = new ApolloClient({
  uri: 'http://localhost:3000'
})

const App = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </StateProvider>
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('app'))
