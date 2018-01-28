import {combineReducers} from 'redux'
import app from './appReducer'
import user from './user'
import repositories from './repositories'
import repository from './repository'

export default combineReducers({
  app,
  user,
  repositories,
  repository
})
