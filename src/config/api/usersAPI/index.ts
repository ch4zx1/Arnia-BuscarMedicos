import api from "@/config/api";
const token = localStorage.getItem("token");

export const getUsersApi = () =>
  api
    .get("/users/count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);

export const getUsersAllTableApi = (page: number, query: string) =>
  api
    .get(`/users?page=` + page + `&size=6&sort=asc&search=` + query, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);

export const getUsersByTypeTableApi = (
  page: number,
  query: string,
  type: string
) =>
  api
    .get(
      `/users/profile?type=` +
        type +
        `&page=` +
        page +
        `&size=6&sort=asc&search=` +
        'query',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => response.data);
