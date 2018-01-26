import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from 'components/Loader'
import List from 'components/Repositories/List'
import { getUserRepositories } from 'actions/repositories'

class RepositoryList extends PureComponent {
  static propTypes = {
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    repositories: PropTypes.arrayOf(PropTypes.object),
    getUserRepositories: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false,
    fetched: false,
    repositories: null
  }

  componentWillMount () {
    const curUser = localStorage.getItem('user')

    if (curUser !== null && curUser !== '') {
      this.props.getUserRepositories(curUser)
    }
  }

  renderRepositoryList = () => {
    const { fetching, fetched, repositories } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (fetched) {
      return (<List list={repositories} />)
    }
  }

  render () {
    return (
      <div>
        <h1>User repositories</h1>

        { this.renderRepositoryList() }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    fetching: state.repositories.fetching,
    fetched: state.repositories.fetched,
    repositories: state.repositories.list
  }),
  (dispatch) => bindActionCreators({ getUserRepositories }, dispatch)
)(RepositoryList)
