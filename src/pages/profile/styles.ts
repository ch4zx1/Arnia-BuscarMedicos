import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  h1 {
    color: var(--cinzas-cinza-900, #212121);
    /* H4 32px */
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 48px */
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 48px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--Cinza-900, #212121);
    font-feature-settings: "liga" off;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 145.6%; /* 43.68px */
    letter-spacing: -0.6px;
    margin-bottom: 32px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background: var(--cinzas-cinza-200, #eee);
  width: 330px;
  height: 69px;
  cursor: pointer;

  span {
    color: var(--cinzas-cinza-700, #616161);
    /* 20px Regular */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  img {
    width: 24px;
    height: 24px;
  }

  &.active {
    background: var(--primria-azul-1, #046639);

    span {
      color: var(--Branco, #fff);
      /* 20px Semibold */
      font-family: Sora;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
      letter-spacing: 0.2px;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 693px;

  span {
    color: var(--Cinza-900, #212121);
    /* 20px Semibold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  p {
    color: var(--Cinza-700, #616161);
    /* 20px Regular */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }
`;

export const ButtonEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
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

export const Separator = styled.div`
  width: 693px;
  height: 2px;
  flex-shrink: 0;
  background: var(--Cinza-300, #e0e0e0);
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background-color: var(--Cinza-200, #eee);

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ContainerPermissions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: var(--Cinza-900, #212121);
    /* 20px Semibold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
    margin-bottom: 8px;
  }

  input {
    display: flex;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  label {
    color: var(--escala-de-cinza-preto-900, #212121);
    /* 16px/NText 16px regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 27.2px */
    letter-spacing: 0.2px;
  }

  input:checked + label {
    color: var(--escala-de-cinza-preto-900, #212121);
    /* 16px/N Text 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerCB = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ContainerDButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 30px;

  button {
    width: 341px;
    height: 56px;
    padding: 12px 64px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const ContainerButtonLeft = styled.div`
  button {
    background: var(--primria-azul-1, #046639);
    color: var(--Branco, #fff);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    border: none;
  }
`;

export const ContainerButtonRight = styled.div`
  button {
    background-color: white;
    color: var(--Erro, #f33);
    text-align: center;
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    border: 2px solid var(--Erro, #f33);
  }
`;
export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  width: 262px;
  height: 56px;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Sucesso, #00c247);
  border: none;
  cursor: pointer;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;

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
`;
