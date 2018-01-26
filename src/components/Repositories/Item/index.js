import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.scss'

export default class RepositoryListItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    description: PropTypes.string,
    createdAt: PropTypes.string.isRequired
  }

  render () {
    const {
      name,
      githubLink,
      description,
      createdAt
    } = this.props

    return (
      <li styleName='repository-item'>
        <h3>{name}</h3>

        { description !== '' && (<p>{description}</p>) }

        <a href={githubLink}>On github</a>

        <div styleName='repository-item-footer'>
          <span>Created {createdAt}</span>
          <Link to={`/repositories/${name}`}>More</Link>
        </div>
      </li>
    )
  }
}
