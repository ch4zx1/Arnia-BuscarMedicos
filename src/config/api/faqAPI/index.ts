import api from "@/config/api";
const token = localStorage.getItem("token");

export const getFaqTableApi = async (
  page: number,
  query: string
): Promise<any> => {
  try {
    const response = await api.get(`/questions?page=${page}&size=5`, {
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
      window.location.href = "/";
      console.error(error);
    } else {
      console.error(error);
      throw error;
    }
  }
};

export const postFaq = async (
  title: string,
  message: string,
  type: string
): Promise<any> => {
  try {
    const response = await api.post(
      "/questions",
      {
        title: title,
        message: message,
        type: type,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "/";
      console.error(error);
    } else {
      console.error(error);
      throw error;
    }
  }
};
