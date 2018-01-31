import { connect } from 'react-redux'

import Navigation from 'components/Navigation'

export default connect(
  (state) => ({
    curUser: state.user.curUser
  })
)(Navigation)
