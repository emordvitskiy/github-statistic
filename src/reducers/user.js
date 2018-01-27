import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { SET_CUR_USER, GET_USER } from 'constants/actionTypes'

const initialState = {
  fetching: false,
  fetched: false,
  curUser: null,
  userData: null,
  error: null
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case SET_CUR_USER:
      return {
        ...state,
        curUser: action.payload
      }
    case `${GET_USER}_${PENDING}`:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case `${GET_USER}_${FULFILLED}`:
      return {
        ...state,
        fetching: false,
        fetched: true,
        userData: action.payload.data,
        error: null
      }
    case `${GET_USER}_${REJECTED}`:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
