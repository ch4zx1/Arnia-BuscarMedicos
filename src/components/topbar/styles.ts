import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;

  width: 83.8vw;
  height: 100px;
  padding: 37px 32px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: white;

  button {
    background-color: white;
    border: none;
  }
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  width: 282px;
  height: 56px;
  flex-shrink: 0;
`

export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  margin-right: 42px;

  span {
    color: var(--cinzas-cinza-900, #212121);
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  p {
    color: var(--cinzas-cinza-600, #757575);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`
