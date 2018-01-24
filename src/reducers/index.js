import {combineReducers} from 'redux'
import app from './appReducer'
import user from './user'
export default combineReducers({
  app,
  user
})
