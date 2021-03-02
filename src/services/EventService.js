import axios from 'axios'

//this is a single axios instance , we can use for our entire app
const apiClient = axios.create({
  //this is the base URL for all calls to use
  baseURL: 'https://my-json-server.typicode.com/fardisaz/real-world-vue',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getEvents() {
    //this '/events' will be added to the baseURL
    return apiClient.get('/events')
  },
  getEvent(id) {
    //this '/events' will be added to the baseURL
    return apiClient.get('/events/' + id)
  }
}
