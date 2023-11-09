import React, { useEffect } from 'react'
import { Router, Route } from 'react-router-dom'

import Loading from 'components/LoadingNew'

/** Page */
import HomePage from 'views/Global'
import SignPage from 'views/SignIn'
import LoginPage from 'views/Login'
import VipPage from 'views/Vip'

import history from './routerHistory'
import GlobalStyle from './style/Global'

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <GlobalStyle />
        <Loading isShow />

        <>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <SignPage />
          </Route>
          <Route exact path="/vip">
            <VipPage/>
          </Route>
        </>
      </Router>
    </>
  )
}

export default React.memo(App)
