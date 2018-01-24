import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUserByName } from 'actions/user'

class ChangeUser extends PureComponent {
  static propTypes = {
    getUserByName: PropTypes.func.isRequired
  }

  componentWillMount () {
    const curUser = localStorage.getItem('user')

    if (curUser !== null && curUser !== '') {
      this.props.getUserByName(curUser)
    }
  }

  render () {
    return (
      <div>Change user</div>
    )
  }
}

export default connect(
  null,
  (dispatch) => bindActionCreators({ getUserByName }, dispatch)
)(ChangeUser)
