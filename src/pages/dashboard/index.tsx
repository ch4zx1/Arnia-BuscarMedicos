import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber, formatProfileName } from "@/utils";
import {
  getDashboardApi,
  getDashboardTableApi,
} from "@/config/api/dashboardAPI";
import CurrentDate from "@/components/localtime";
import WelcomeImg from "@/assets/welcome.svg";
import ArrowBlue from "@/assets/right-small.svg";
import Status from "@/components/status";
import * as S from "./styles";
import Table from "@/components/table/table";
import { DoctorType, dashboardDataTableType } from "@/config/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [doctor, setDoctor] = useState<DoctorType>({
    total: 0,
    available: 0,
    unavailable: 0,
  });
  const [contractor, setContractor] = useState<DoctorType>({
    total: 0,
    available: 0,
    unavailable: 0,
  });
  const [tableData, setTableData] = useState([]);
  const header = [
    { header: "Usuário", width: 200, padding: 15 },
    { header: "E-mail", width: 200, padding: 15 },
    { header: "WhatsApp", width: 200, padding: 15 },
    { header: "Tipo de Usuário", width: 200, padding: 15 },
  ];

  const navigate = useNavigate();
  const notify = (text: string): void => {
    toast(text);
  };

  const getDashboardData = async () => {
    try {
      const data = await getDashboardApi();
      if (data) {
        setDoctor(data.doctor);
        setContractor(data.contractor);
      } else {
        notify("Dados não recebidos.");
      }
    } catch (error) {
      notify(error as string);
    }
  };

  const getDashboardTable = async () => {
    try {
      const data = await getDashboardTableApi();
      if (data) {
        setTableData(data);
      } else {
        notify("Erro ao obter tabelas.");
      }
    } catch (error) {
      notify(error as string);
    }
  };

  useEffect(() => {
    getDashboardData();
    getDashboardTable();
  }, []);

  return (
    <>
      <S.Body>
        <S.ContainerTop>
          <S.ContainerLeft>
            <S.ContainerImg>
              <img src={WelcomeImg} alt="Bem-vindo" />
            </S.ContainerImg>
            <CurrentDate locale="pt-BR" />
            <S.ContainerText>
              <h3>Seja bem vinda!</h3>
              <span>
                Neste painel você poderá administrar seu site de forma simples e
                prática.
              </span>
            </S.ContainerText>
          </S.ContainerLeft>
          <S.ContainerRight>
            <Status
              type="MEDICOS"
              n1={doctor.total}
              n2={doctor.available}
              n3={doctor.unavailable}
            ></Status>
            <Status
              type="CONTRATANTES"
              n1={contractor.total}
              n2={contractor.available}
              n3={contractor.unavailable}
            ></Status>
          </S.ContainerRight>
        </S.ContainerTop>
        <S.ContainerBottom>
          <S.ContainerUC>
            <S.ContainerTopUC>
              <p>Últimos usuários cadastrados</p>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/users")}
              >
                Ver tudo <img src={ArrowBlue}></img>
              </span>
            </S.ContainerTopUC>
            <Table headers={header}>
              {tableData.map((dataTable: dashboardDataTableType) => (
                <tr key={dataTable.id}>
                  <td>
                    {(dataTable.firstName ? dataTable.firstName : "-") +
                      " " +
                      (dataTable.lastName ? dataTable.lastName : "-")}
                  </td>
                  <td>{dataTable.email ? dataTable.email : "-"}</td>
                  <td>
                    {dataTable.phone ? formatPhoneNumber(dataTable.phone) : "-"}
                  </td>
                  <td>
                    {dataTable.profiles && dataTable.profiles.length > 0
                      ? formatProfileName(dataTable.profiles[0].name)
                      : "-"}
                  </td>
                </tr>
              ))}
            </Table>
          </S.ContainerUC>
        </S.ContainerBottom>
        <ToastContainer />
      </S.Body>
    </>
  );
}
export default Dashboard;
