import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'
import Layout from '../Layout/index'

const Router = () => {
  return routes.map((route, i) => (
    <Switch>
      <Route
        exact
        path={route.path}
        key={i}
        render={() => (
          <Layout>
            <route.component />
          </Layout>
        )}
      ></Route>
    </Switch>
  ))
}

export default Router
