import { Button } from '@/components/ui'
import * as S from './styles'
import { useState } from 'react'
import Input from '@/components/ui/input'
import { LoginService } from '@/config/api/loginAPI'
import { useNavigate } from 'react-router-dom'
import { UserType } from '@/config/types'
import ShowPass from '@/assets/showpass.svg'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isShow, setIsShow] = useState(true)
  const navigate = useNavigate();

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
		  <Input
              placeholder="usuario@email.com"
              onChange={e => setEmail(e.target.value)}
            >
              E-mail
            </Input>
            <S.ContainerShowPassword>
              <Button style={{cursor: 'pointer'}}
                onClick={() => {
                  togglePassword()
                }}
              >
                <img src={ShowPass}></img>
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
          </S.Form>
          <S.ContainerCheckbox>
		 	<a href="">Esqueci minha senha</a>
        	<Input style={{cursor: 'pointer'}} type="Checkbox">Lembrar-me</Input>
          </S.ContainerCheckbox>
          <S.ContainerEntrar>
            <Button style={{cursor: 'pointer'}} onClick={handleClick}>Entrar</Button>
          </S.ContainerEntrar>
        </S.ContainerLogin>
      </S.Body>
    </>
  )
}

export default Login
