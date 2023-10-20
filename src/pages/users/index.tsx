import { useEffect, useState } from "react";
import * as S from "./styles";
import {
  getUsersApi,
  getUsersAllTableApi,
  getUsersByTypeTableApi,
} from "@/config/api/usersAPI";
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
  const [pages, setPages] = useState<any>(0);
  const [actualPage, setActualPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState(4);
  const [search, setSearch] = useState("");
  const [totalElements, setTotalElements] = useState(0);
  const [offset, setOffset] = useState(0);

  async function getUsersData() {
    const data = await getUsersApi();
    setUsers(data);
  }

  async function getAllUserTableData() {
    const data = await getUsersAllTableApi(actualPage, search);
    setTableData(data.content);
    setPages(data.totalPages);
	setTotalElements(data.totalElements)
	setOffset(data.pageable.offset)
  }

  async function getTableDataByType() {
    let type = "";
    if (activeButton === "Médicos") {
      type = "medico";
    }
    if (activeButton === "Contratantes") {
      type = "contratante";
    }

    const data = await getUsersByTypeTableApi(actualPage, search, type);

    setTableData(data.content);
    setPages(data.totalPages);
	setTotalElements(data.totalElements)
	setOffset(data.pageable.offset)
  }

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    getUsersData();
    if (activeButton === "Todos") {
      getAllUserTableData();
    }

    if (activeButton === "Médicos" || activeButton === "Contratantes") {
      getTableDataByType();
    }
  }, [actualPage, activeButton, search]);

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

  const goToPreviousPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1);
    }
  };

  const goToNextPage = () => {
    if (actualPage < pages) {
      setActualPage(actualPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= pages) {
      setActualPage(pageNumber);
    }
  };
  const visiblePageNumbers: any[] = [];
  let startPage = Math.max(actualPage - Math.floor(visiblePages / 2), 1);
  let endPage = Math.min(startPage + visiblePages - 1, pages);

  if (pages > visiblePages) {
    if (endPage === pages) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    } else if (startPage === 1) {
      endPage = Math.min(startPage + visiblePages - 1, pages);
    }
  }

  for (let i= startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  const handleSearch = (value: string) => {
    setSearch(value);
  };

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
              <Search onSearch={handleSearch}></Search>
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
                  <td style={{fontWeight: "bold"}}>{(dataTable.firstName ? dataTable.firstName : "-") + " " + (dataTable.lastName ? dataTable.lastName : "-")}</td>
                  <td>{dataTable.email ? dataTable.email : "-"}</td>
                  <td>{dataTable.phone ? formatPhoneNumber(dataTable.phone) : "-"}</td>
                  <td>{dataTable.specialties && dataTable.specialties.length > 0
                      ? formatProfileName(dataTable.specialties[0].name)
                      : "-"}</td>
                  <td>
                    {dataTable.address && dataTable.address.city
                      ? dataTable.address.city
                      : "-"}
                  </td>
                  <td>
                    {dataTable.address && dataTable.address.state
                      ? dataTable.address.state
                      : "-"}
                  </td>
                  <td>
                    {dataTable.profiles && dataTable.profiles.length > 0
                      ? formatProfileName(dataTable.profiles[0].name)
                      : "-"}
                  </td>
                </tr>
              ))}
            </Table>
          </S.ContainerTable>
		  <S.ContainerTableBottom>
			<span>{offset} de {totalElements} itens</span>
			<S.ContainerArrow>
            <button onClick={goToPreviousPage} disabled={actualPage === 1}>
              &#60;
            </button>
			<S.ContainerTableButtonDisabled>
			{visiblePageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                disabled={actualPage === pageNumber}
              >
                {pageNumber}
              </button>
            ))}
			</S.ContainerTableButtonDisabled>
            <button onClick={goToNextPage} disabled={actualPage === pages}>
              &gt;
            </button>
			</S.ContainerArrow>
          </S.ContainerTableBottom>
        </S.ContainerContent>
      </S.ContainerAll>
    </S.Body>
  );
}
export default Users;
