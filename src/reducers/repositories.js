import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { GET_REPOSITORIES } from 'constants/actionTypes'

const initialState = {
  fetching: false,
  fetched: false,
  list: null,
  error: null
}

export default function repositories (state = initialState, action) {
  switch (action.type) {
    case `${GET_REPOSITORIES}_${PENDING}`:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case `${GET_REPOSITORIES}_${FULFILLED}`:
      const { data } = action.payload

      return {
        fetching: false,
        fetched: true,
        list: data.map(item => ({
          name: item.name,
          githubLink: item.html_url,
          description: item.description,
          createdAt: item.created_at
        })),
        error: null
      }
    case `${GET_REPOSITORIES}_${REJECTED}`:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
