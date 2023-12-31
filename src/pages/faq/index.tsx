import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Search from "@/components/search";
import Filter from "@/assets/Group.svg";
import Plus from "@/assets/plus.svg";
import Table from "@/components/table/table";
import Edit from "@/assets/edit.svg";
import Delete from "@/assets/delete.svg";
import Eye from "@/assets/eyes.svg";
import { getFaqTableApi } from "@/config/api/faqAPI/index";
import { faqDataTableType } from "@/config/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FAQ() {
  const header = [
    { header: "Título", width: 830, padding: 30 },
    { header: "Ações", width: 150, padding: 55 },
  ];

  const [activeButton, setActiveButton] = useState("Contratantes");
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState<number>(0);
  const [actualPage, setActualPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState(4);
  const [data, setData] = useState([{}]);
  const [totalElements, setTotalElements] = useState(0);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const notify = (text: string): void => {
    toast(text);
  };

  async function getTableNotification() {
    try {
      const data = await getFaqTableApi(actualPage - 1, search);
      if (data) {
        setData(data.content);
        setPages(data.totalPages);
        setTotalElements(data.totalElements);
        setOffset(data.pageable.offset);
      } else {
        notify("Erro ao obter dados.");
      }
    } catch (error) {
      notify(error as string);
    }
  }

  useEffect(() => {
    getTableNotification();
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

  return (
    <>
      <S.Body>
        <S.ContainerAll>
          <S.ContainerTop>
            <h4>FAQ (Perguntas Frequentes)</h4>
          </S.ContainerTop>
          <S.ContainerButtons>
            <S.Buttons
              onClick={() => handleButtonClick("Contratantes")}
              className={activeButton === "Contratantes" ? "active" : ""}
            >
              <span>Contratantes</span>
            </S.Buttons>
            <S.Buttons
              onClick={() => handleButtonClick("Medicos")}
              className={activeButton === "Medicos" ? "active" : ""}
            >
              <span>Médicos</span>
            </S.Buttons>
          </S.ContainerButtons>
          <S.ContainerContent>
            <S.ContainerContentRow>
              <S.ContainerContentRowLeft>
                <Search onSearch={handleSearch}></Search>
                <S.FilterButton>
                  <img src={Filter}></img>
                </S.FilterButton>
              </S.ContainerContentRowLeft>
              <S.ContainerContentRowRight>
                <S.NewButton onClick={() => navigate("/faq/new")}>
                  <img src={Plus}></img>
                  <span>Novo FAQ</span>
                </S.NewButton>
              </S.ContainerContentRowRight>
            </S.ContainerContentRow>
            <S.ContainerTable>
              <Table headers={header}>
                {data.map((dataTable: faqDataTableType, index) => (
                  <tr key={index}>
                    <td>{dataTable.title}</td>

                    <td>
                      <S.ActionContainer>
                        <S.ButtonEdit>
                          <img src={Eye} />
                        </S.ButtonEdit>
                        <S.ButtonEdit>
                          <img src={Edit} />
                        </S.ButtonEdit>
                        <S.ButtonEdit>
                          <img src={Delete} />
                        </S.ButtonEdit>
                      </S.ActionContainer>
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
    </>
  );
}

export default FAQ;
