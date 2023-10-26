import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 212px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--primria-azul-2, #0e9658);
  margin-left: 32px;
  align-items: center;
  align-content: center;

  img {
    margin-left: 8px;
    margin-right: 8px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  p {
    color: #fff;
    /* 14px Regular */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 0.2px;
    margin-top: 18px;
  }
`;
