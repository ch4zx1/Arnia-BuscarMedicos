import api from '@/config/api';

const token = localStorage.getItem('token');

export const getMeApi = async () => {
  try {
    const response = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      //window.location.href = "/";
      console.error(error);
    } else {
      console.error(error);
      throw error;
    }}
};