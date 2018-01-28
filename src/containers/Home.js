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
    curUser: PropTypes.string,
    userData: PropTypes.object,
    getUserByName: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false,
    fetched: false,
    curUser: null,
    userData: {}
  }

  componentWillMount () {
    const { curUser, getUserByName } = this.props

    if (curUser !== null && curUser !== '') {
      getUserByName(curUser)
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
    const { curUser, fetching, getUserByName } = this.props

    return (
      <div>
        <UserForm fetching={fetching} submit={getUserByName} />

        <div>
          { curUser
            ? this.renderUserInfo()
            : 'User is not set'
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    curUser: state.user.curUser,
    userData: state.user.userData
  }),
  (dispatch) => bindActionCreators({ getUserByName }, dispatch)
)(ChangeUser)
