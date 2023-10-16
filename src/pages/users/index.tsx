import { useEffect, useState } from "react";
import * as S from "./styles";
import { getUsersApi, getUsersTableApi } from "@/config/api/usersAPI";
import Search from "@/components/search";
import Table from "@/components/table/table";

function Users() {
  const header = [
    { header: "Usuário", width: 200, padding: 10 },
    { header: "E-mail", width: 200, padding: 10 },
    { header: "WhatsApp", width: 200, padding: 10 },
    { header: "Especialidade", width: 200, padding: 10 },
    { header: "Cidade", width: 200, padding: 10 },
    { header: "Estado", width: 200, padding: 10 },
    { header: "Tipo de usuário", width: 200, padding: 10 },
  ];

  const [users, setUsers] = useState<any>({});
  const [activeButton, setActiveButton] = useState("Todos");
  const [tableData, setTableData] = useState<Array<any>>([]);

  async function getUsersData() {
    const data = await getUsersApi();
    setUsers(data);
  }

  async function getUserTableData() {
    const data = await getUsersTableApi();
    setTableData(data);
  }

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    getUsersData();
    getUserTableData();
  }, []);

  function formatPhoneNumber(phoneNumber: string): string {
    const numericOnly: string = phoneNumber.replace(/\D/g, "");

    const hasElevenDigits: boolean = numericOnly.length === 11;

    const formattedNumber: string = hasElevenDigits
      ? `${numericOnly.substring(0, 2)} ${numericOnly.substring(
          2,
          3
        )}${numericOnly.substring(3, 7)}-${numericOnly.substring(7, 11)}`
      : `${numericOnly.substring(0, 2)} ${numericOnly.substring(
          2,
          6
        )}-${numericOnly.substring(6, 10)}`;

    return formattedNumber;
  }

  function formatProfileName(profileName: string): string {
    const capitalized = profileName
      .toLowerCase()
      .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());

    if (capitalized === "Medico") {
      return "Médico";
    }

    return capitalized;
  }

  return (
    <S.Body>
      <S.ContainerAll>
        <S.ContainerTop>
          <h4>Usuários Cadastrados |</h4>
          <S.ContainerSpan>
            <span>{activeButton}</span>
          </S.ContainerSpan>
        </S.ContainerTop>
        <S.ContainerButtons>
          <S.Buttons
            onClick={() => handleButtonClick("Todos")}
            className={activeButton === "Todos" ? "active" : ""}
          >
            <span>Todos</span>
            <S.ContainerNumber
              className={activeButton === "Todos" ? "active" : ""}
            >
              <span>{users.total}</span>
            </S.ContainerNumber>
          </S.Buttons>
          <S.Buttons
            onClick={() => handleButtonClick("Contratantes")}
            className={activeButton === "Contratantes" ? "active" : ""}
          >
            <span>Contratantes</span>
            <S.ContainerNumber
              className={activeButton === "Contratantes" ? "active" : ""}
            >
              <span>{users.totalContractor}</span>
            </S.ContainerNumber>
          </S.Buttons>
          <S.Buttons
            onClick={() => handleButtonClick("Médicos")}
            className={activeButton === "Médicos" ? "active" : ""}
          >
            <span>Médicos</span>
            <S.ContainerNumber
              className={activeButton === "Médicos" ? "active" : ""}
            >
              <span>{users.totalDoctors}</span>
            </S.ContainerNumber>
          </S.Buttons>
        </S.ContainerButtons>
        <S.ContainerContent>
          <S.ContainerContentRow>
            <S.ContainerContentRowLeft>
              <Search></Search>
            </S.ContainerContentRowLeft>
            <S.ContainerContentRowRight>
              <span>Total de usuários</span>
              {activeButton === "Todos" ? <p>{users.total}</p> : ""}
              {activeButton === "Contratantes" ? (
                <p>{users.totalContractor}</p>
              ) : (
                ""
              )}
              {activeButton === "Médicos" ? <p>{users.totalDoctors}</p> : ""}
            </S.ContainerContentRowRight>
          </S.ContainerContentRow>
          <S.ContainerTable>
            <Table headers={header}>
              {tableData.map((dataTable: any) => (
                <tr key={dataTable.id}>
                  <td>{dataTable.firstName + " " + dataTable.lastName}</td>
                  <td>{dataTable.email}</td>
                  <td>{formatPhoneNumber(dataTable.phone)}</td>
                  <td>{}</td>
                  <td>{dataTable.address}</td>
                  <td>{dataTable.address}</td>
                  <td>{formatProfileName(dataTable.profiles[0].name)}</td>
                </tr>
              ))}
            </Table>
          </S.ContainerTable>
        </S.ContainerContent>
      </S.ContainerAll>
    </S.Body>
  );
}
export default Users;
