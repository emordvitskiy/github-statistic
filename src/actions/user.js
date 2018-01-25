import { GET_USER } from 'constants/actionTypes'
import API from 'services/Api'

export function getUserByName (name) {
  return (dispatch) => dispatch({
    type: GET_USER,
    payload: API.get(`users/${name}`)
      .then(({ data }) => {
        localStorage.setItem('user', name)

        return {
          name: data.login,
          data: {
            login: data.login,
            avatar_url: data.avatar_url,
            githubLink: data.html_url,
            name: data.name,
            email: data.email
          }
        }
      })
  })
}
