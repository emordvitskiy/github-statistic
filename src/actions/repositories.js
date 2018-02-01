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

export function repositoryStats (name) {
  return (dispatch, getState) => {
    const { curUser: userName } = getState().user
    const url = `repos/${userName}/${name}/stats/commit_activity`

    return dispatch({
      type: GET_REPOSITORY,
      payload: API.get(url)
        .then((response) => {
          // repeat if reponse was returned with status 202
          if (response.status === 202) {
            return API.get(url)
          }

          return response
        })
    })
  }
}
