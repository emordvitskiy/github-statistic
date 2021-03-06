import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from 'components/Loader'
import ErrorMessage from 'components/Error'
import Histogramm from 'components/Histogramm'
import { repositoryStats } from 'actions/repositories'

class Repository extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string
      }).isRequired
    }).isRequired,
    fetching: PropTypes.bool,
    commitsStats: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          days: PropTypes.arrayOf(PropTypes.number),
          total: PropTypes.number,
          week: PropTypes.number
        })
      ),
      PropTypes.object
    ]),
    error: PropTypes.string,
    repositoryStats: PropTypes.func.isRequired
  }

  componentWillMount () {
    const { match, repositoryStats } = this.props

    repositoryStats(match.params.name)
  }

  renderRepository = () => {
    const {
      fetching,
      commitsStats,
      error
    } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (error) {
      return <ErrorMessage text={error} />
    }

    if (Array.isArray(commitsStats) && commitsStats.length > 0) {
      return (<Histogramm data={commitsStats} />)
    }

    return 'Not enough data'
  }

  render () {
    const { name: repositoryName } = this.props.match.params

    return (
      <div>
        <h2><em>{ repositoryName }</em> commits per week</h2>

        { this.renderRepository() }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    fetching: state.repository.fetching,
    commitsStats: state.repository.commitsStats,
    error: state.repository.error
  }),
  (dispatch) => bindActionCreators({ repositoryStats }, dispatch)
)(Repository)
