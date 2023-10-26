import styled from "styled-components";

type PropsData = {
  height: string;
  width: string;
};

type PropsInput = {
  height: number;
};

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px;
  justify-content: center;
`;

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  color: var(--cinzas-cinza-900, #212121);
  /* 20px Regular */
  font-family: Sora;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  letter-spacing: 0.2px;
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

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 79.3vw;
  height: 630px;
  max-width: 1332px;
  padding: 12px;
  gap: 300px;
  overflow: auto;
  border-radius: 24px;
  background: var(--Branco, #fff);
  /* Sombra 3 */
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);

  h1 {
    margin-top: -15px;
    color: var(--cinzas-cinza-900, #212121);
    /* 20px Semibold */
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: 0.2px;
  }
`;

export const ContainerScroll = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 24px 24px 24px 16px;
  width: 77.8vw;
  max-width: 1300px;
  height: 630px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #E0E0E0;
  }
`;

export const ContainerData = styled.div<PropsData>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const InputCustom = styled.div<PropsInput>`
  padding: 10px 10px 0px 0px;
  height: ${(props) => props.height + 34}px;
  width: 400px;

  position: relative;

  input {
    width: 400px;
    height: ${(props) => props.height}px;
    border-radius: 16px;
    border: 1px solid var(--cinzas-cinza-300, #e0e0e0);
    background: var(--cinzas-cinza-50, #fafafa);
    color: var(--cinzas-cinza-700, #616161);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    margin-top: 0px;
    padding: 16px 20px 16px 20px;
  }

  label {
    position: absolute;
    top: 0;
    left: 10px;
    color: var(--cinzas-cinza-600, #757575);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    background: white;
    padding: 0 8px;
  }
`;

export const ContainerDays = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 382px;
  height: 236px;

  span {
    color: var(--cinzas-cinza-600, #757575);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-bottom: 8px;
  }
`;

export const ContainerPeriod = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  margin-top: 10px;
  margin-left: 32px;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  input {
    width: 24px;
    height: 24px;
  }

  label {
    color: var(--cinzas-cinza-700, #616161);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: row;

  width: 382.001px;
  height: 1px;

  background: #bdbdbd;

  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ContainerObs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 40px;
`;

export const ContainerPlan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

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
    color: var(--cinzas-cinza-700, #616161);
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
  }
`;
