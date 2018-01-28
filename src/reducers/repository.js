import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { GET_REPOSITORY } from 'constants/actionTypes'

const initialState = {
  fetching: false,
  fetched: false,
  commitsStats: [],
  error: null
}

export default function repositories (state = initialState, action) {
  switch (action.type) {
    case `${GET_REPOSITORY}_${PENDING}`:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case `${GET_REPOSITORY}_${FULFILLED}`:
      return {
        fetching: false,
        fetched: true,
        commitsStats: action.payload.data,
        error: null
      }
    case `${GET_REPOSITORY}_${REJECTED}`:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
