import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
})

export default API
