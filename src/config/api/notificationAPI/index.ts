import api from "@/config/api";

const token = localStorage.getItem("token");

export const getNotificationTableApi = async (
  page: number,
  query: string
): Promise<any> => {
  try {
    const response = await api.get(`/notifications?size=5&page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export const postNotification = async (
  title: string,
  message: string,
  type: string
): Promise<any> => {
  try {
    const response = await api.post(
      "/notifications",
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
