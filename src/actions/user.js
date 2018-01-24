import { GET_USER } from 'constants/actionTypes'
import Api from 'services/Api'

const api = new Api({
  baseUrl: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Awesome-Octocat-App'
  }
})

export function getUserByName (name) {
  return (dispatch) => ({
    type: GET_USER,
    payload: api.get(`users/${name}`)
      .then(response => {
        localStorage.setItem('user', name)

        return {
          name: response.login,
          data: {}
        }
      })
  })
}
