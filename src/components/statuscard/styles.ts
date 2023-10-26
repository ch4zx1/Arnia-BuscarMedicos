import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  width: 219px;
  height: 90px;
  flex-shrink: 0;
  margin-left: 16px;
  border-radius: 24px;
  background: var(--cinzas-cinza-100, #f5f5f5);

  img {
    margin-left: 18px;
    margin-top: 16px;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }

  span {
    margin-left: 6px;
    margin-top: 35px;
    color: var(--cinzas-cinza-900, #212121);
    font-family: Sora;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
`;
