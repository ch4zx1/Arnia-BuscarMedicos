import api from '@/config/api'
const token = localStorage.getItem('token')

export const getUsersApi = () =>
  api
    .get('/users/count', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data)

	export const getUsersTableApi = () =>
  api
    .get('/users?page=1&size=6&sort=desc', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.data.content)
