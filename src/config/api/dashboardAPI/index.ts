import api from '@/config/api'
const token = localStorage.getItem('token')

type DashboardType = {
  doctor: {
      total: number,
      available: number,
      unavailable: number
  },
  contractor: {
      total: number,
      available: number,
      unavailable: number
  }
}

export const getDashboardApi = ():Promise<DashboardType> =>
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
