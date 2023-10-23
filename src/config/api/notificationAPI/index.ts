import api from '@/config/api'
const token = localStorage.getItem('token')

export const getNotificationTableApi = (page: number, query: string) =>
  api
    .get(`/notifications?size=6&page=`+ page, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);

    export const postNotification = (title:string, message:string, type:string) =>
    api
    .post(`/notifications`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        title:title,
        message:message,
        type:type
      }
    } )