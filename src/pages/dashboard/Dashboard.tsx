import WelcomeImg from '@/assets/welcome.svg'
import ArrowBlue from '@/assets/right-small.svg'
import Status from '@/components/status'
import * as S from './styles'
import Table from '@/components/table/table'
import { getDashboardApi, getDashboardTableApi } from '@/config/api/dashboardAPI'
import { useState, useEffect } from 'react'
import CurrentDate from '@/components/localtime'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [doctor, setDoctor] = useState<any>({})
  const [contractor, setContractor] = useState<any>({})
  const [tableData, setTableData] = useState<Array<any>>([])
  const header = [
    { header: 'Usuário', width: 200, padding: 15},
    { header: 'E-mail', width: 200, padding: 15 },
    { header: 'WhatsApp', width: 200, padding: 15 },
    { header: 'Tipo de Usuário', width: 200, padding: 15 }
  ]
  async function getDashboardData() {
    const data = await getDashboardApi()
    setDoctor(data.doctor)
    setContractor(data.contractor)
  }

  async function getDashboardTable() {
    const data = await getDashboardTableApi()
    setTableData(data)
  }

  function formatPhoneNumber(phoneNumber: string): string {
	const numericOnly: string = phoneNumber.replace(/\D/g, '');
	const hasElevenDigits: boolean = numericOnly.length === 11;
  
	const formattedNumber: string = hasElevenDigits
	  ? `${numericOnly.substring(0, 2)} ${numericOnly.substring(2, 3)}${numericOnly.substring(3, 7)}-${numericOnly.substring(7, 11)}`
	  : `${numericOnly.substring(0, 2)} ${numericOnly.substring(2, 6)}-${numericOnly.substring(6, 10)}`;
  
	return formattedNumber;
  }

  function formatProfileName(profileName: string): string {
	// Converte para minúsculas e deixa a primeira letra maiuscula
	const capitalized = profileName.toLowerCase().replace(/\b\w/g, firstChar => firstChar.toUpperCase());
  
	// Adiciona acento ao "Medico"
	if (capitalized === "Medico") {
	  return "Médico";
	}
  
	return capitalized;
  }

  useEffect(() => {
    getDashboardData()
    getDashboardTable()
  }, [])

  return (
    <>
      <S.Body>
        <S.ContainerTop>
			<S.ContainerLeft>
				<S.ContainerImg>
				<img src={WelcomeImg}></img>
				</S.ContainerImg>
				<CurrentDate locale="pt-BR" />
				<S.ContainerText>
				<h3>Seja bem vinda!</h3>
				<span>Neste painel você poderá administrar seu site de forma simples e prática.</span>
				</S.ContainerText>
			</S.ContainerLeft>
			<S.ContainerRight>
			<Status type='MEDICOS' n1={doctor.total} n2={doctor.available} n3={doctor.unavailable}></Status>
			<Status type='CONTRATANTES' n1={contractor.total} n2={contractor.available} n3={contractor.unavailable}></Status>
			</S.ContainerRight>
		</S.ContainerTop>
		<S.ContainerBottom>
		<S.ContainerUC>
			<S.ContainerTopUC>
				<p>Últimos usuários cadastrados</p>
				<span onClick={() => window.location.href = "./users"}>Ver tudo <img src={ArrowBlue}></img></span>
			</S.ContainerTopUC>
			<Table headers={header}>
        	{tableData.map((dataTable: any) => (
          	<tr key={dataTable.id}>
				<td>{(dataTable.firstName ? dataTable.firstName : "-") + " " + (dataTable.lastName ? dataTable.lastName : "-")}</td>
				<td>{dataTable.email ? dataTable.email : "-"}</td>
				 <td>{dataTable.phone ? formatPhoneNumber(dataTable.phone) : "-"}</td>
				 <td>{dataTable.profiles && dataTable.profiles.length > 0
                      ? formatProfileName(dataTable.profiles[0].name)
                      : "-"}</td>
          </tr>
        ))}
      </Table>
		</S.ContainerUC>
		</S.ContainerBottom>
      </S.Body>
    </>
  )
}
export default Dashboard