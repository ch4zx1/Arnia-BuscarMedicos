import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`
export const ContainerTop = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
`

export const ContainerLeft = styled.div`
display: flex;
flex-direction: row;

width: 586px;
height: 375px;
flex-shrink: 0;

border-radius: 24px;
background: var(--primria-azul-1, #046639);
/* Sombra 1 */
box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
`

export const ContainerRight = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

export const ContainerBottom = styled.div`
display: flex;`