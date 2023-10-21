import { useState } from "react";
import * as S from "./styles";
import Search from "@/components/search";
import Filter from "@/assets/Group.svg"
import Plus from "@/assets/plus.svg"
import Table from "@/components/table/table";

function FAQ() {

	const header = [
		{ header: "Título", width: 400, padding: 30 },
		{ header: "Ações", width: 10, padding: 0 },
	  ];

  const [activeButton, setActiveButton] = useState("Contratantes");
  const [search, setSearch] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

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
				<S.FilterButton><img src={Filter}></img></S.FilterButton>
				</S.ContainerContentRowLeft>
				<S.ContainerContentRowRight>
				<S.NewButton>
					<img src={Plus}></img>
					<span>Novo FAQ</span>
				</S.NewButton>
				</S.ContainerContentRowRight>
			</S.ContainerContentRow>
			<S.ContainerTable>
			<Table headers={header}>
              <tr>
			  <td>oi</td>
			  <td>Oi</td>
			  </tr>
            </Table>
			</S.ContainerTable>
		  </S.ContainerContent>
        </S.ContainerAll>
      </S.Body>
    </>
  );
}

export default FAQ;
