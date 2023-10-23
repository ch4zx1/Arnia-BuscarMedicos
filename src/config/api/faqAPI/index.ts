import api from '@/config/api'
const token = localStorage.getItem('token')

export const getFaqTableApi = (page: number, query: string) =>
  api
    .get(`/questions?page=`+ page + `&size=6`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);


    export const postFaq = (title:string, message:string, type:string) =>
    api
    .post(`/questions`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        title:title,
        message:message,
        type:type
      }
    } )