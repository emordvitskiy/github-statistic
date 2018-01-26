import { GET_REPOSITORIES } from 'constants/actionTypes'
import API from 'services/Api'

export function getUserRepositories (name) {
  return (dispatch) => dispatch({
    type: GET_REPOSITORIES,
    payload: API.get(`users/${name}/repos`, {
      params: { sort: 'created' }
    })
  })
}
