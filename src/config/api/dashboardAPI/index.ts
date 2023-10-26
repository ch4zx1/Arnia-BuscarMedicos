import api from "@/config/api";
import { ApiDashboardType } from "@/config/types";

const token = localStorage.getItem("token");

export const getDashboardApi = async (): Promise<ApiDashboardType | null> => {
  try {
    const response = await api.get("/users/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.status);
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "./";
      console.error("Não autorizado. Entre novamente.");
    } else {
      console.error(error);
    }
  }

  return null;
};

export const getDashboardTableApi = async () => {
  try {
    const response = await api.get("/users?page=1&size=4&sort=desc", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data.content;
    } else {
      console.error(response.status);
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      window.location.href = "./";
	  console.error("Não autorizado. Entre novamente.");
    } else {
      console.error(error);
    }
  }

  return null;
};
