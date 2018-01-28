import { GET_REPOSITORIES, GET_REPOSITORY } from 'constants/actionTypes'
import API from 'services/Api'

export function getUserRepositories (userName) {
  return (dispatch) => dispatch({
    type: GET_REPOSITORIES,
    payload: API.get(`users/${userName}/repos`, {
      params: { sort: 'created' }
    })
  })
}

// export function getRepositoryByName (name) {
//   return (dispatch, getState) => {
//     const { curUser: userName } = getState().user
//
//     return {
//       type: GET_REPOSITORY,
//       payload: API.get(`repos/${userName}/${name}`)
//     }
//   }
// }

export function repositoryStats (name) {
  return (dispatch, getState) => {
    const { curUser: userName } = getState().user

    return dispatch({
      type: GET_REPOSITORY,
      payload: API.get(`repos/${userName}/${name}/stats/commit_activity`)
    })
  }
}
