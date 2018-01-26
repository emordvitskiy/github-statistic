import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loader from 'components/Loader'
import UserForm from 'components/User/Form'
import UserInfo from 'components/User/Info'
import { getUserByName } from 'actions/user'

class ChangeUser extends PureComponent {
  static propTypes = {
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    userData: PropTypes.object,
    getUserByName: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false,
    fetched: false,
    userData: {}
  }

  componentWillMount () {
    const curUser = localStorage.getItem('user')

    if (curUser !== null && curUser !== '') {
      this.props.getUserByName(curUser)
    }
  }

  renderUserInfo = () => {
    const { fetching, fetched, userData } = this.props

    if (fetching) {
      return (<Loader />)
    }

    if (fetched) {
      return (<UserInfo data={userData} />)
    }
  }

  render () {
    const { fetching, getUserByName } = this.props

    return (
      <div>
        <UserForm fetching={fetching} submit={getUserByName} />

        <div>
          { this.renderUserInfo() }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    userData: state.user.userData
  }),
  (dispatch) => bindActionCreators({ getUserByName }, dispatch)
)(ChangeUser)
