import styled from 'styled-components'

interface Props {
  menuOpen: boolean
}

export const Body = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: #046639;
  align-items: center;
  height: 100vh;
  width: ${({ menuOpen }) => (menuOpen ? '271px' : '70px')};
`

export const ContainerLogo = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 48px;
`

export const ContainerButton = styled.div<Props>`
  margin-top: ${({ menuOpen }) => (menuOpen ? '0px' : '80px')};
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    margin-left: 15px;
    margin-right: 15px;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: ${({ menuOpen }) => (menuOpen ? '255px' : '55px')};
    height: 56px;

    color: var(--Branco, #fff);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    text-decoration: none;

    background: var(--primria-azul-1, #046639);
    border: none;
    border-radius: 8px;

    &.active {
      background: var(--primria-azul-4, #b4e08e);
      color: var(--primria-azul-1, #046639);
      font-weight: 600;
    }
  }
`
