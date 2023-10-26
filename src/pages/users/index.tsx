import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUsersApi,
  getUsersAllTableApi,
  getUsersByTypeTableApi,
} from "@/config/api/usersAPI";
import { formatPhoneNumber, formatProfileName } from "@/utils";
import { usersType, User } from "@/config/types";
import * as S from "./styles";
import Search from "@/components/search";
import Table from "@/components/table/table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [users, setUsers] = useState<usersType>({
    total: 0,
    totalContractor: 0,
    totalDoctors: 0,
  });
  const [activeButton, setActiveButton] = useState("Todos");
  const [tableData, setTableData] = useState([]);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState(4);
  const [search, setSearch] = useState("");
  const [totalElements, setTotalElements] = useState(0);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const notify = (text: string): void => {
    toast(text);
  };

  const getUsersData = async () => {
    try {
      const data = await getUsersApi();
      if (data) {
        setUsers(data);
      } else {
        throw new Error("Dados não recebidos.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUserTableData = async () => {
	console.log(search)
    try {
      const data = await getUsersAllTableApi(actualPage, search);
      if (data) {
        setTableData(data.content);
        setPages(data.totalPages);
        setTotalElements(data.totalElements);
        setOffset(data.pageable.offset);
      } else {
        notify("Dados não recebidos.");
      }
    } catch (error) {
      notify(error as string);
    }
  };

  const getTableDataByType = async () => {
    let type = "";
    if (activeButton === "Médicos") {
      type = "medico";
    }
    if (activeButton === "Contratantes") {
      type = "contratante";
    }
	console.log(search)
    try {
      const data = await getUsersByTypeTableApi(actualPage, search, type);
	
      if (data) {
		
        setTableData(data.content);
        setPages(data.totalPages);
        setTotalElements(data.totalElements);
        setOffset(data.pageable.offset);
      } else {
        notify("Dados não recebidos.");
      }
    } catch (error) {
      notify(error as string);
    }
  };

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
  const visiblePageNumbers: number[] = [];
  let startPage = Math.max(actualPage - Math.floor(visiblePages / 2), 1);
  let endPage = Math.min(startPage + visiblePages - 1, pages);

  if (pages > visiblePages) {
    if (endPage === pages) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    } else if (startPage === 1) {
      endPage = Math.min(startPage + visiblePages - 1, pages);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
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
              {tableData.map((dataTable: User) => (
                <tr
                  key={dataTable.id}
                  onClick={() =>
                    navigate("/users/details/", { state: dataTable })
                  }
                >
                  <td style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {(dataTable.firstName ? dataTable.firstName : "-") +
                      " " +
                      (dataTable.lastName ? dataTable.lastName : "-")}
                  </td>
                  <td>{dataTable.email ? dataTable.email : "-"}</td>
                  <td>
                    {dataTable.phone ? formatPhoneNumber(dataTable.phone) : "-"}
                  </td>
                  <td>
                    {dataTable.specialties && dataTable.specialties.length > 0
                      ? dataTable.specialties[0].name
                      : "-"}
                  </td>
                  <td>
                    {dataTable.address && dataTable.address[0].city
                      ? dataTable.address[0].city
                      : "-"}
                  </td>
                  <td>
                    {dataTable.address && dataTable.address[0].state
                      ? dataTable.address[0].state
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
            <span>
              {offset} de {totalElements} itens
            </span>
            <S.ContainerArrow>
              <button
                style={{ cursor: "pointer" }}
                onClick={goToPreviousPage}
                disabled={actualPage === 1}
              >
                &#60;
              </button>
              <S.ContainerTableButtonDisabled>
                {visiblePageNumbers.map((pageNumber) => (
                  <button
                    style={{ cursor: "pointer" }}
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    disabled={actualPage === pageNumber}
                  >
                    {pageNumber}
                  </button>
                ))}
              </S.ContainerTableButtonDisabled>
              <button
                style={{ cursor: "pointer" }}
                onClick={goToNextPage}
                disabled={actualPage === pages}
              >
                &gt;
              </button>
            </S.ContainerArrow>
          </S.ContainerTableBottom>
        </S.ContainerContent>
      </S.ContainerAll>
      <ToastContainer />
    </S.Body>
  );
}
export default Users;
