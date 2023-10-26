import api from "@/config/api";
const token = localStorage.getItem("token");

export const getUsersApi = async () => {
  try {
    const response = await api.get("/users/count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.status);
      throw new Error("Erro ao obter dados da API");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "./";
      console.error(error);
    } else {
      console.error("Erro ao obter dados da API:", error);
      throw error;
    }
  }
};

export const getUsersAllTableApi = async (
  page: number,
  query: string
): Promise<any> => {
  try {
    const response = await api.get(
      `/users?page=${page}&size=6&sort=asc&search=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.status);
      throw new Error("Erro ao obter dados da API");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "./";
      console.error(error);
    } else {
      console.error("Erro ao obter dados da API:", error);
      throw error;
    }
  }
};

export const getUsersByTypeTableApi = async (
  page: number,
  query: string,
  type: string
): Promise<any> => {
  try {
    const response = await api.get(
      `/users/profile?type=${type}&page=${page}&size=6&sort=asc&search=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(response.status);
      throw new Error("Erro ao obter dados da API");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "./";
      console.error(error);
    } else {
      console.error("Erro ao conectar a API:", error);
      throw error;
    }
  }
};
