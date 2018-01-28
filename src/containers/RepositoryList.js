import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from 'components/Loader'
import ErrorMessage from 'components/Error'
import List from 'components/Repositories/List'
import { getUserRepositories } from 'actions/repositories'

class RepositoryList extends PureComponent {
  static propTypes = {
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    repositories: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
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
    const {
      fetching,
      fetched,
      repositories,
      error
    } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (error) {
      return <ErrorMessage text={error} />
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
    repositories: state.repositories.list,
    error: state.repositories.error
  }),
  (dispatch) => bindActionCreators({ getUserRepositories }, dispatch)
)(RepositoryList)
