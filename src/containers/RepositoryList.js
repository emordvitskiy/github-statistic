import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class RepositoryList extends PureComponent {
  render () {
    return (
      <div>Repository list</div>
    )
  }
}

export default connect()(RepositoryList)
