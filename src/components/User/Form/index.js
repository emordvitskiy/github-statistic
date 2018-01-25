import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default class UserForm extends PureComponent {
  static propTypes = {
    fetching: PropTypes.bool,
    submit: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false
  }

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { value } = this.state

    if (value !== '') {
      this.props.submit(value)
    }
  }

  render () {
    return (
      <div styleName='user-form-container'>
        <h2>Change user</h2>

        <form>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button disabled={this.props.fetching} onClick={this.handleSubmit}>OK</button>
        </form>
      </div>
    )
  }
}
