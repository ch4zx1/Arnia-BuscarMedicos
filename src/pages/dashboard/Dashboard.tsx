import WelcomeImg from '@/assets/welcome.svg'
import ArrowBlue from '@/assets/right-small.svg'
import Status from '@/components/status'
import * as S from './styles'
import Table from '@/components/table/table'
import {
  getDashboardApi,
  getDashboardTableApi
} from '@/config/api/dashboardAPI'
import { useState, useEffect } from 'react'
import CurrentDate from '@/components/localtime'

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

	console.log(data);
  }

  async function getDashboardTable() {
    const data = await getDashboardTableApi()
    setTableData(data)
    console.log(data)
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
				<span>Ver tudo <img src={ArrowBlue}></img></span>
			</S.ContainerTopUC>
			<Table headers={header}>
        	{tableData.map((dataTable: any) => (
          	<tr key={dataTable.id}>
				<td>{dataTable.firstName + ' ' + dataTable.lastName}</td>
				<td>{dataTable.email}</td>
				<td>{dataTable.phone}</td>
				<td>{dataTable.profiles[0].name}</td>
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

/*

*/