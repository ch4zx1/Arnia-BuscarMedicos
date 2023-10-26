import React, { useEffect, useState } from "react";
import { LoginService } from "@/config/api/loginAPI";
import { UserType } from "@/config/types";
import * as S from "./styles";
import { Button } from "@/components/ui";
import Input from "@/components/ui/input";
import ShowPass from "@/assets/showpass.svg";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const notify = (text: string): void => {
    toast(text);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShow, setIsShow] = useState(true);

  async function handleClick() {
    const user: UserType = {
      email: email,
      senha: password,
    };

    try {
      await LoginService(email, password);
    } catch (error) {
      notify("E-mail ou senha incorretos.");
    }
  }
  const togglePassword = () => {
    setIsShow((isShow) => !isShow);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <S.Body>
        <S.ContainerLogin>
          <span>Seja bem vindo!</span>
          <h1>Realize seu Login</h1>
          <S.Form>
            <Input
              placeholder="usuario@email.com"
              onChange={(e) => setEmail(e.target.value)}
            >
              E-mail
            </Input>
            <S.ContainerShowPassword>
              <Button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  togglePassword();
                }}
              >
                <img src={ShowPass} alt="Mostrar Senha" />
              </Button>
              <S.ContainerPassword>
                <Input
                  type={isShow ? "text" : "password"}
                  placeholder="Insira uma senha"
                  onChange={(e) => setPassword(e.target.value)}
                >
                  Senha
                </Input>
              </S.ContainerPassword>
            </S.ContainerShowPassword>
          </S.Form>
          <S.ContainerCheckbox>
            <a href="#">Esqueci minha senha</a>
            <Input style={{ cursor: "pointer" }} type="Checkbox">
              Lembrar-me
            </Input>
          </S.ContainerCheckbox>
          <S.ContainerEntrar>
            <Button style={{ cursor: "pointer" }} onClick={handleClick}>
              Entrar
            </Button>
          </S.ContainerEntrar>
        </S.ContainerLogin>
      </S.Body>
      <ToastContainer />
    </>
  );
}

export default Login;
