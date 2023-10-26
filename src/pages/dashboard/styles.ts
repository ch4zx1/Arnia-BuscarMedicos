import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`;
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 586px;
  height: 362px;
  flex-shrink: 0;

  border-radius: 24px;
  background: var(--primria-azul-1, #046639);
  /* Sombra 1 */
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
`;

export const ContainerText = styled.div`
  margin-left: 32px;
  margin-right: 130px;
  h3 {
    margin-top: 12px;
    color: var(--Branco, #fff);
    /* H3 36px */
    font-family: Sora;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 50.4px */
    margin-bottom: 12px;
  }

  span {
    color: var(--cinzas-cinza-300, #e0e0e0);
    /* 20px Regular */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  height: 50%;

  img {
    margin-top: 18px;
    margin-right: 18px;
    width: 298px;
    height: 195px;
    flex-shrink: 0;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContainerBottom = styled.div`
  display: flex;
`;

export const ContainerUC = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 79.3vw;
  height: 365px;
  max-width: 1332px;

  padding-left: 16px;
  margin-top: 18px;
  border-radius: 24px;
  background: var(--Branco, #fff);
  /* Sombra 1 */
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
`;

export const ContainerTopUC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 10px;
  margin-bottom: 6px;

  p {
    color: var(--cinzas-cinza-900, #212121);
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }

  span {
    display: flex;
    color: var(--Sistema, #004ce8);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
