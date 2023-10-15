import api from '@/config/api'
const token = localStorage.getItem('token')

export const getDashboardApi = () =>
  api
    .get('/users/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)

export const getDashboardTableApi = () =>
  api
    .get('/users?page=1&size=4&sort=desc', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data.content)
