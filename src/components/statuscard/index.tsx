import * as S from "./styles";

import { CardProps } from "@/config/types";

import Contratantes1 from "@/assets/statuscard-icons/contratantes1.svg";
import Contratantes2 from "@/assets/statuscard-icons/contratantes2.svg";
import Contratantes3 from "@/assets/statuscard-icons/contratantes3.svg";

import Medicos1 from "@/assets/statuscard-icons/medicos1.svg";
import Medicos2 from "@/assets/statuscard-icons/medicos2.svg";
import Medicos3 from "@/assets/statuscard-icons/medicos3.svg";

function StatusCard({ number, type, data }: CardProps) {
  return (
    <>
      <S.Body>
        {type === "MEDICOS" && number === 1 ? <img src={Medicos1}></img> : ""}
        {type === "MEDICOS" && number === 2 ? <img src={Medicos2}></img> : ""}
        {type === "MEDICOS" && number === 3 ? <img src={Medicos3}></img> : ""}
        {type === "CONTRATANTES" && number === 1 ? (
          <img src={Contratantes1}></img>
        ) : (
          ""
        )}
        {type === "CONTRATANTES" && number === 2 ? (
          <img src={Contratantes2}></img>
        ) : (
          ""
        )}
        {type === "CONTRATANTES" && number === 3 ? (
          <img src={Contratantes3}></img>
        ) : (
          ""
        )}
        <span>{data}</span>
      </S.Body>
    </>
  );
}

export default StatusCard;
