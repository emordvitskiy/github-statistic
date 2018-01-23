import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class ChangeUser extends PureComponent {
  render () {
    return (
      <div>Change user</div>
    )
  }
}

export default connect()(ChangeUser)
