import axios from 'axios'

const apiClient = axios.create({  
  baseURL: `http://radiant-plains-67953.herokuapp.com/api/films`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


export default {
  getFilms() {
    return apiClient.get()
  }
}