import StatusCard from "@/components/statuscard";
import { StatusProps } from "@/config/types";
import * as S from "./styles";

function Status({ type, n1, n2, n3 }: StatusProps) {
  return (
    <S.Body>
      <h1>{type == "MEDICOS" ? "Médicos" : "Contratantes"}</h1>
      <S.ContainerCards>
        <StatusCard number={1} type={type} data={n1}></StatusCard>
        <StatusCard number={2} type={type} data={n2}></StatusCard>
        <StatusCard number={3} type={type} data={n3}></StatusCard>
      </S.ContainerCards>
    </S.Body>
  );
}
export default Status;
