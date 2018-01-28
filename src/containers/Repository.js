import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from 'components/Loader'
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
    fetched: PropTypes.bool,
    commitsStats: PropTypes.arrayOf(
      PropTypes.shape({
        days: PropTypes.arrayOf(PropTypes.number),
        total: PropTypes.number,
        week: PropTypes.number
      })
    ),
    repositoryStats: PropTypes.func.isRequired
  }

  componentWillMount () {
    const { match, repositoryStats } = this.props

    repositoryStats(match.params.name)
  }

  renderUserInfo = () => {
    const { fetching, fetched, commitsStats } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (fetched) {
      return (<Histogramm data={commitsStats} />)
    }
  }

  render () {
    const { name: repositoryName } = this.props.match.params

    return (
      <div>
        <h2><em>{ repositoryName }</em> commits per week</h2>

        { this.renderUserInfo() }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    fetching: state.repository.fetching,
    fetched: state.repository.fetched,
    commitsStats: state.repository.commitsStats
  }),
  (dispatch) => bindActionCreators({ repositoryStats }, dispatch)
)(Repository)
