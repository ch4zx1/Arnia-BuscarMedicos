import * as S from "./styles";
import User from "@/assets/userd.svg";
import Exit from "@/assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { OnChangeProps } from "@/config/types";

function Dropdown({ onChange }: OnChangeProps) {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  const handleProfile = () => {
    onChange(false);
    navigate("/profile");
  };

  return (
    <>
      <S.Body>
        <S.ContainerButton>
          <S.Button onClick={handleProfile}>
            <img src={User}></img>
            <span>Usuário</span>
          </S.Button>
          <S.Separator></S.Separator>
          <S.Button onClick={handleExit}>
            <img src={Exit}></img>
            <span>Sair</span>
          </S.Button>
        </S.ContainerButton>
      </S.Body>
    </>
  );
}

export default Dropdown;
