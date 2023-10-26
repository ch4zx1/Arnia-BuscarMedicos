import api from "@/config/api";

export const LoginService = async (email: string, password: string) => {
  try {
    const response = await api.post(
      `/public/register/login?email=${email}&password=${password}`
    );

    const { token } = response.data;

    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (response.status === 200) {
      window.location.href = "/dashboard";
    } else {
      console.error(response.status);
    }
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      throw new Error("Não autorizado. Revise email e senha.");
    } else {
      throw new Error(error);
    }
  }
};
