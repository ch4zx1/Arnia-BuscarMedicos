import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;

  justify-content: center;
`;

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  h4 {
    color: var(--cinzas-cinza-900, #212121);
    /* H4 32px */
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 48px */
  }

  span {
    color: var(--cinzas-cinza-900, #212121);
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

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
    z-index: 999;

    background: white;
  }
  background: var(--cinzas-cinza-100, #f5f5f5);
  border-radius: 16px 16px 0px 0px;
`;

export const ContainerSpan = styled.div`
  margin-left: 5px;
`;

export const ContainerNumber = styled.div`
  display: flex;
  padding: 4px 12px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: var(--primria-azul-4, #b4e08e);

  &.active {
    background: var(--primria-azul-1, #046639);
  }

  color: var(--Branco, #fff);
  /* 14px Regular */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.2px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 24px 24px 24px;
  background: var(--Branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);

  width: 79.3vw;
  height: 565px;
  max-width: 1332px;
  padding: 24px;
`;

export const ContainerContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerContentRowLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ContainerContentRowRight = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #000;
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  p {
    color: #000;
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  margin-top: 18px;
  height: 500px;
`;

export const ContainerTableBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    color: var(--cinzas-cinza-500, #9e9e9e);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }

  button {
    background-color: white;
    border: none;
    width: 24px;
    height: 24px;
    color: var(--cinzas-cinza-500, #9e9e9e);
    text-align: center;
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerTableButtonDisabled = styled.div`
  display: flex;
  flex-direction: row;

  button:disabled {
    border-radius: 4px;
    background: var(--primria-azul-1, #046639);

    color: var(--Branco, #fff);
    text-align: center;
    /* Small Text 14px Semibold */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerArrow = styled.div`
  display: flex;
  flex-direction: row;
`;
