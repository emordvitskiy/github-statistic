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
    curUser: PropTypes.string.isRequired,
    fetching: PropTypes.bool,
    repositories: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string,
    getUserRepositories: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false,
    repositories: []
  }

  componentWillMount () {
    const { curUser, getUserRepositories } = this.props

    getUserRepositories(curUser)
  }

  renderRepositoryList = () => {
    const {
      fetching,
      repositories,
      error
    } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (error) {
      return <ErrorMessage text={error} />
    }

    return (<List list={repositories} />)
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
    curUser: state.user.curUser,
    fetching: state.repositories.fetching,
    repositories: state.repositories.list,
    error: state.repositories.error
  }),
  (dispatch) => bindActionCreators({ getUserRepositories }, dispatch)
)(RepositoryList)
