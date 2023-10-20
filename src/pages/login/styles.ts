import styled from 'styled-components'

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(./src/assets/background.png);
  background-repeat: no-repeat;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 676px;
  height: 775px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Branco, #fff);
  box-shadow: 0px 0px 10px 0px rgba(97, 97, 97, 0.3);

  padding-left: 138px;
  padding-right: 139px;

  justify-content: center;

  span {
    color: var(--cinzas-cinza-800, #424242);

    /* 20px Regular */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  h1 {
    color: var(--cinzas-cinza-900, #212121);

    /* H3 36px */
    font-family: Sora;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 50.4px */
  }
`
export const Form = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  input {
    padding: 16px;
    width: 400px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--cinza-300, #e0e0e0);
    background: var(--branco, #fff);

    color: var(--cinza-900, #212121);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    outline: none;
    margin-bottom: 20px;
  }
  input:focus {
    border: 1px solid var(--sucesso, #00c247);
  }

  label {
    display: flex;
    color: var(--cinza-600, #757575);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
	margin-bottom: 5px;
  }
  input:focus + label {
    color: var(--sucesso, #00c247);
  }
`
export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 400px;
  margin-top: 12px;

  input {
    width: 18px;
    height: 18px;
    margin-right: 7px;
  }

  label {
    color: var(--cinza-900, #212121);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  a {
    color: var(--cinza-700, #616161);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    text-decoration: none;
    margin-left: 93px;
  }
`
export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding-right: 50px;
  }
`
export const ContainerShowPassword = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  button {
    position: absolute;
    margin-right: 16px;
    border: none;
    width: 24px;
    height: 24px;
    background-color: transparent;
  }
`
export const ContainerEntrar = styled.div`
  display: flex;
  margin-top: 40px;

  button {
    width: 400px;
    height: 56px;
    border-radius: 16px;
    border: none;
    border-radius: 16px;
    background: var(--primria-azul-1, #046639);
    color: var(--branco, #fff);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`
