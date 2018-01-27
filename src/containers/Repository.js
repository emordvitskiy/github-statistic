import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRepositoryByName } from 'actions/repositories'

class Repository extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string
      }).isRequired
    }).isRequired,
    getRepositoryByName: PropTypes.func.isRequired
  }

  componentWillMount () {
    const { match, getRepositoryByName } = this.props

    getRepositoryByName(match.params.name)
  }

  render () {
    return (
      <div>Repository</div>
    )
  }
}

export default connect(
  null,
  (dispatch) => bindActionCreators({ getRepositoryByName }, dispatch)
)(Repository)
