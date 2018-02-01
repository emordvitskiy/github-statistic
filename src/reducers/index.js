import {combineReducers} from 'redux'
import user from './user'
import repositories from './repositories'
import repository from './repository'

export default combineReducers({
  user,
  repositories,
  repository
})
