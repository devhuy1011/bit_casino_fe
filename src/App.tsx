import React, { useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Router, Route } from 'react-router-dom'

import Loading from 'components/LoadingNew'

/** Page */
import HomePage from 'views/Global'

import history from './routerHistory'
import GlobalStyle from './style/Global'

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
  FORMAT: {
    groupSize: 3,
    groupSeparator: ',',
    decimalSeparator: ',',
  },
})

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
        </>
      </Router>
    </>
  )
}

export default React.memo(App)
