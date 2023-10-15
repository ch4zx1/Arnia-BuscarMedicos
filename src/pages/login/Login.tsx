import { Button } from '@/components/ui'
import * as S from './styles'
import { useState } from 'react'
import Input from '@/components/ui/input'
import { LoginService } from '@/config/api/loginAPI'
import { useNavigate } from 'react-router-dom'
import { UserType } from '@/config/types'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isShow, setIsShow] = useState(true)
  const navigate = useNavigate()
  async function handleClick() {
    const user: UserType = {
      email: email,
      senha: password
    }
    LoginService(email, password)
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/dashboard')
    }
  }
  const togglePassword = () => {
    setIsShow(isShow => !isShow)
  }

  return (
    <>
      <S.Body>
        <S.ContainerLogin>
          <span>Seja bem vindo!</span>
          <h1>Realize seu Login</h1>
          <S.Form>
            <S.ContainerShowPassword>
              <Button
                onClick={() => {
                  togglePassword()
                }}
              >
                <img src=".\src\assets\showpass.svg"></img>
              </Button>
              <S.ContainerPassword>
                <Input
                  type={isShow ? 'text' : 'password'}
                  placeholder="Insira uma senha"
                  onChange={e => setPassword(e.target.value)}
                >
                  Senha
                </Input>
              </S.ContainerPassword>
            </S.ContainerShowPassword>
            <Input
              placeholder="usuario@email.com"
              onChange={e => setEmail(e.target.value)}
            >
              E-mail
            </Input>
          </S.Form>
          <S.ContainerCheckbox>
            <Input type="Checkbox">Lembrar-me</Input>
            <a href="">Esqueci minha senha</a>
          </S.ContainerCheckbox>
          <S.ContainerEntrar>
            <Button onClick={handleClick}>Entrar</Button>
          </S.ContainerEntrar>
        </S.ContainerLogin>
      </S.Body>
    </>
  )
}

export default Login
