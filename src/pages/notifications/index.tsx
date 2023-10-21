import { useState } from "react";
import * as S from "./styles";
import Search from "@/components/search";
import Filter from "@/assets/Group.svg"
import Plus from "@/assets/plus.svg"
import Table from "@/components/table/table";
import Edit from "@/assets/edit.svg";
import Delete from "@/assets/delete.svg";
import Eye from "@/assets/eyes.svg"

function Notifications() {

	const header = [
		{ header: "Título", width: 400, padding: 30 },
		{ header: "Data de envio", width: 400, padding: 20 },
		{ header: "Ações", width: 150, padding: 60 },
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
            <h4>Notificações</h4>
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
					<span>Nova Notificação</span>
				</S.NewButton>
				</S.ContainerContentRowRight>
			</S.ContainerContentRow>
			<S.ContainerTable>
			<Table headers={header}>
              <tr>
			  <td>oi</td>
			  <td>Oi</td>
			  <td>
				<S.ActionContainer>
				<S.ButtonEdit>
				<img src={Eye}/>
				</S.ButtonEdit>
				<S.ButtonEdit>
				<img src={Edit}/>
				</S.ButtonEdit>
				<S.ButtonEdit>
				<img src={Delete}/>
				</S.ButtonEdit>
				</S.ActionContainer>
			  </td>
			  </tr>
            </Table>
			</S.ContainerTable>
			<S.ContainerTableBottom>
			<span>{} de {} itens</span>
			<S.ContainerArrow>
			<S.ContainerTableButtonDisabled>
			</S.ContainerTableButtonDisabled>
			</S.ContainerArrow>
          </S.ContainerTableBottom>
		  </S.ContainerContent>
        </S.ContainerAll>
      </S.Body>
    </>
  );
}

export default Notifications;
