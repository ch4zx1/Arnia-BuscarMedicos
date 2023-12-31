import styled from "styled-components";

export const ContainerTable = styled.div`
  background-color: white;
  width: 1300px;
  height: 280px;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 80px;

  thead {
    color: var(--Branco, #fff);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  th {
    text-align: start;
    padding: 15px;
    background-color: var(--primria-azul-1, #046639);
  }

  th:first-child {
    border-radius: 16px 0px 0px 0px;
    background-color: var(--primria-azul-1, #046639);
  }

  th:last-child {
    border-radius: 0px 16px 0px 0px;
    background-color: var(--primria-azul-1, #046639);
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  td {
    text-align: start;
    padding: 15px;

    color: var(--cinzas-cinza-900, #212121);
    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }
`;
