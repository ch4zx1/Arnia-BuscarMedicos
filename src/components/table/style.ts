import styled from 'styled-components'

export const ContainerTable = styled.div`
  background-color: white;
  width: 1590px;
  height: 530px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 80px;

  th:first-child {
    border-radius: 16px 0px 0px 0px;
  }

  th:last-child {
    border-radius: 0px 16px 0px 0px;
  }

  td {
    padding: 50px;
    text-align: center;
  }
`

export const Header = styled.thead`
  background-color: #046639;
  color: white;
  width: 1000px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
  /* border: solid 1px black; */
`

export const HeaderData = styled.th`
  padding: 24px 32px;
  width: auto;
`
