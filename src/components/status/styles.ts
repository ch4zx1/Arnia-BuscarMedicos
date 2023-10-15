import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: column;

width: 720px;
height: 175px;
flex-shrink: 0;

border-radius: 24px;
background: var(--Branco, #FFF);
/* Sombra 1 */
box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);

h1{
	margin-top: 24px;
	margin-left: 16px;
	margin-bottom: 16px;

	color: var(--cinzas-cinza-900, #212121);
	/* 20px Semibold */
	font-family: Sora;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 140%; /* 28px */
	letter-spacing: 0.2px;
}
`

export const ContainerCards = styled.div`
	display: flex;
	flex-direction: row;
`