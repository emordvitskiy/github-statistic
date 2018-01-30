import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.scss'

export default class UserInfo extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      name: PropTypes.string,
      email: PropTypes.string
    }).isRequired
  }

  render () {
    const {
      login,
      avatarUrl,
      githubLink,
      name,
      email
    } = this.props.data

    return (
      <div styleName='user-info'>
        <h2>User repository information</h2>

        <img src={avatarUrl} />

        <table>
          <tbody>
            <tr>
              <td>Github name</td>
              <td>{login}</td>
            </tr>

            { name &&
              (
                <tr>
                  <td>Name</td>
                  <td>{name}</td>
                </tr>
              )
            }

            { email &&
              (
                <tr>
                  <td>Email</td>
                  <td>{email}</td>
                </tr>
              )
            }
          </tbody>
        </table>

        <div styleName='link-container'>
          <a href={githubLink}>On github</a>
          <Link to='/repositories'>User repositories</Link>
        </div>
      </div>
    )
  }
}
