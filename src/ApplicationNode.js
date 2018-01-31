import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'

import history from 'services/history'
import DevTools from 'components/DevTools'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Navigation from 'containers/Navigation'
import userWrapper from 'containers/UserWrapper'
import Home from 'containers/Home'
import RepositoryList from 'containers/RepositoryList'
import Repository from 'containers/Repository'
import NotFound from 'components/NotFound'

import './styles.scss'

const ApplicationNode = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />

        <Navigation />

        {process.env.NODE_ENV !== 'production' && <DevTools /> }

        <div styleName='page-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/repositories' component={userWrapper(RepositoryList)} />
            <Route exact path='/repositories/:name' component={userWrapper(Repository)} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  </Provider>
)

ApplicationNode.propTypes = {
  store: PropTypes.object.isRequired
}

export default ApplicationNode
