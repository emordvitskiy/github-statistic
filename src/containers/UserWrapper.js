import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

export default function (Component) {
  class UserWrapper extends PureComponent {
    static propTypes = {
      curUser: PropTypes.string
    }

    static defaultProps = {
      curUser: null
    }

    componentWillMount () {
      const { curUser, history } = this.props

      if (curUser === null || curUser === '') {
        history.push('/')
      }
    }

    render () {
      return <Component />
    }
  }

  return connect(
    (state) => ({
      curUser: state.user.curUser
    })
  )(withRouter(UserWrapper))
}
