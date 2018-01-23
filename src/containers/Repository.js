import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Repository extends PureComponent {
  render () {
    return (
      <div>Repository</div>
    )
  }
}

export default connect()(Repository)
