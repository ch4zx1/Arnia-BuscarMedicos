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

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 24px 24px 24px;
  background: var(--Branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  height: 570px;
  width: 79.3vw;
  min-height: fit-content;
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
`;

export const FilterButton = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--cinzas-cinza-100, #f5f5f5);
  display: flex;
  padding: 3.75px 2.25px 2.25px 2.25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

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
  background: var(--Sucesso, #00c247);
  cursor: pointer;

  span {
    color: var(--Branco, #fff);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  margin-top: 32px;
  height: 500px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ButtonEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--cinzas-cinza-300, #e0e0e0);
  background: var(--Branco, #fff);
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
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
