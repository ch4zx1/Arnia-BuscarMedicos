import api from '@/config/api'
import { useNavigate } from 'react-router-dom'

export const LoginService = async (email: string, Password: string) => {
  try {
    const userData = await api.post(
      `/public/register/login?email=${email}&password=${Password}`
    )
    const { token } = userData.data
    localStorage.setItem('token', token)
    api.defaults.headers.Authorization = token
  } catch (error) {
    console.log(error)
  }
}
