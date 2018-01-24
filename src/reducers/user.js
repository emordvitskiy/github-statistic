import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { GET_USER } from 'constants/actionTypes'

const initialState = {
  fetching: false,
  userData: null,
  error: null
}

export default function app (state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_${PENDING}`:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case `${GET_USER}_${FULFILLED}`:
      return {
        fetching: false,
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
