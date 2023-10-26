import styled from "styled-components";
import Union from "@/assets/Union.svg";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 65px;

  background-image: url(${Union});
  fill: var(--Branco, #fff);
  filter: drop-shadow(0px 0px 25px rgba(163, 163, 163, 0.2));

  width: 230px;
  height: 200px;
  flex-shrink: 0;
`;

export const ContainerButton = styled.div`
  margin-left: 25px;
  margin-top: 50px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18px;
  gap: 12px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  span {
    color: var(--cinzas-cinza-600, #757575);
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
  width: 202px;
  height: 1px;
  flex-shrink: 0;

  background: var(--cinzas-cinza-200, #eee);
`;
