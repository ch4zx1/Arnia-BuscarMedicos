import styled from "styled-components";

export const Body = styled.div`
display: flex;
flex-direction: row;
margin-top: 32px;

justify-content: center;
`

export const ContainerAll = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerTop = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 32px;
h4{
	color: var(--cinzas-cinza-900, #212121);
	/* H4 32px */
	font-family: Sora;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: 150%; /* 48px */
}
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
`

export const Buttons = styled.div`
display: flex;
flex-direction: row;
padding: 18px;
justify-content: center;
align-items: center;
gap: 18px;
cursor: pointer;

color: var(--cinzas-cinza-900, #212121);
/* 20px Regular */
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 28px */
letter-spacing: 0.2px;

&.active {
	color: var(--cinzas-cinza-900, #212121);
	/* 20px Semibold */
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 140%; /* 28px */
	letter-spacing: 0.2px;
	
	
	background: white;
}
background: var(--cinzas-cinza-100, #F5F5F5);
border-radius: 16px 16px 0px 0px;
`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
border-radius: 0px 24px 24px 24px;
background: var(--Branco, #FFF);
/* Sombra 3 */
box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.20);

width: 79.3vw;
height: 565px;
max-width: 1332px;
padding: 24px;
`

export const ContainerContentRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ContainerContentRowLeft = styled.div`
display: flex;
flex-direction: row;
gap: 16px;`

export const ContainerContentRowRight = styled.div`
display: flex;
flex-direction: column;
`

export const FilterButton = styled.div`
width: 56px;
height: 56px;
flex-shrink: 0;
border-radius: 12px;
background: var(--cinzas-cinza-100, #F5F5F5);
display: flex;
padding: 3.75px 2.25px 2.25px 2.25px;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 16px;

img{
	width: 24px;
	height: 24px;
	flex-shrink: 0;
}
`

export const NewButton = styled.div`
display: flex;
width: 262px;
height: 56px;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Sucesso, #00C247);
cursor: pointer;

span{
	color: var(--Branco, #FFF);
	/* 16px semibold */
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 150%; /* 24px */
	letter-spacing: 0.2px;
}

img{
	width: 24px;
	height: 24px;
}
`

export const ContainerTable = styled.div`
display: flex;
margin-top: 32px;
height: 500px;
`

