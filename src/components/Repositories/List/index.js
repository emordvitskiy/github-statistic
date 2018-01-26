import React from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

function RepositoryList (props) {
  return (
    <ul>
      { props.list.map(item => (
          <Item key={item.id} {...item} />
        ))
      }
    </ul>
  )
}

RepositoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RepositoryList
