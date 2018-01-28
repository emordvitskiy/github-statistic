import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

function ErrorMessage (props) {
  return (
    <div styleName='error-container'>{props.text}</div>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
}

export default ErrorMessage
