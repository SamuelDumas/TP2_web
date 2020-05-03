import axios from 'axios'

const apiClient = axios.create({  
  baseURL: 'http://radiant-plains-67953.herokuapp.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
apiClient.interceptors.response.use(
  function (response) {
    return response;

  });

  const RESOURCE_NAME = 'films';

export default {
  getFilms() {
    return apiClient.get(RESOURCE_NAME)
  },
  getFilm(id) {
    return apiClient.get(`${RESOURCE_NAME}/${id}`)
  }
}