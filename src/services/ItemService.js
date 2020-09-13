import axios from 'axios'

let token = localStorage.getItem('token')
console.log(token)

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
const getAuthorizedClient = () => {
  let token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}

export default{
  // index (Exercise)
  getItems(){
    return apiClient.get('/items')
  },

  // detail (Detail)
  getItem(id){
    return apiClient.get('/items/'+id)
  },
  createOrder(data){
    return getAuthorizedClient().post('/orders',data)
  },

  getOrders(){
    return getAuthorizedClient().get('/orders')
  },
  getOrder(id){
    return getAuthorizedClient().get('/orders/'+id)
  },
  registerUser(user){
    return apiClient.post('/register', user)
  }
}