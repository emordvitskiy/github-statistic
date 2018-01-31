import { SET_CUR_USER, GET_USER } from 'constants/actionTypes'
import API from 'services/Api'

export function setCurUser (name) {
  return {
    type: SET_CUR_USER,
    payload: name
  }
}

export function getUserByName (name) {
  return (dispatch) => dispatch({
    type: GET_USER,
    payload: API.get(`users/${name}`)
      .then(({ data }) => {
        dispatch(setCurUser(name))

        return {
          name: data.login,
          data: {
            login: data.login,
            avatarUrl: data.avatar_url,
            githubLink: data.html_url,
            name: data.name,
            email: data.email
          }
        }
      })
  })
}
