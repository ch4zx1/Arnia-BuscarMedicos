import styled from "styled-components";
import { PropsData, PropsInput, ModalProps } from "@/config/types";

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
    background: #e0e0e0;
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

export const ContainerData2 = styled.div<PropsData>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonCustom = styled.button`
  margin-top: 100px;
  width: 400px;
  height: 56px;
  border-radius: 16px;
  border-style: none;
  background: var(--primria-azul-1, #046639);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
  color: white;
`;

export const InputCustom = styled.div<PropsInput>`
  padding: 10px 10px 0px 0px;
  height: ${(props) => props.height + 34}px;
  width: ${(props) => (props.width ? props.width : 400)}px;

  position: relative;

  input {
    width: ${(props) => (props.width ? props.width : 400)}px;
    height: ${(props) => props.height}px;
    border-radius: 16px;
    border-radius: 16px;
    border: 1px solid var(--cinzas-cinza-300, #e0e0e0);
    background: ${(props) => (props.disable ? "#FAFAFA" : "#FFF")};
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

  textarea {
    width: ${(props) => (props.width ? props.width : 400)}px;
    height: ${(props) => props.height}px;
    border-radius: 16px;
    border-radius: 16px;
    border: 1px solid var(--cinzas-cinza-300, #e0e0e0);
    background: ${(props) => (props.disable ? "#FAFAFA" : "#FFF")};
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    margin-top: 0px;
    padding: 16px 20px 16px 20px;
    resize: none;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: none;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    &::-webkit-scrollbar-thumb {
      background: #eee;
      border-radius: 24px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #e0e0e0;
    }
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
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  margin-left: 25px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h2 {
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: #212121;
    margin-top: 25px;
  }

  button {
    align-self: flex-end;
    margin-right: 0px;
    border: none;
    background-color: transparent;
    margin-bottom: 50px;
  }

  h4 {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #616161;
    margin-top: -15px;
    span {
      color: #046639;
    }
  }
`;

export const ContainerConfirmation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 32px;
  margin-bottom: 32px;

  span {
    font-family: Sora;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: #212121;
    margin-top: 25px;
  }
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: #212121;
  }

  .closeButton {
    align-self: flex-end;
    border: none;
    background-color: transparent;
  }

  img {
    margin-left: 150px;
    height: 144px;
    width: 144px;
  }
  p {
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: #212121;
  }
`;
export const ModalFooter = styled.div`
  display: flex;
  margin-top: -300px;

  h2 {
    width: 210px;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #212121;

    span {
      font-weight: 600;
    }
  }
`;

export const ContainerFotter = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 15px;
`;

export const CancelButton = styled.button`
  width: 160px;
  height: 48px;
  gap: 10px;
  border-radius: 16px;
  background-color: #f33;
  color: white;
  border-style: none;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-left: 39px;
`;

export const ConfirmButton = styled.button`
  width: 306px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background-color: #046639;
  color: white;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border-style: none;
  margin-left: 16px;
`;
