import api from '@/config/api'
const token = localStorage.getItem('token')

export const getMeApi = () =>
  api
    .get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)
