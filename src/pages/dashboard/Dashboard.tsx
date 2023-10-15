import * as S from './styles'
import Table from '@/components/table/table'
import {
  getDashboardApi,
  getDashboardTableApi
} from '@/config/api/dashboardAPI'
import { useState, useEffect } from 'react'

function Dashboard() {
  const [doctor, setDoctor] = useState<any>({})
  const [contractor, setContractor] = useState<any>({})
  const [tableData, setTableData] = useState<Array<any>>([{}])
  const header = [
    { header: 'Usuario', width: 160, padding: 40 },
    { header: 'Email', width: 270, padding: 10 },
    { header: 'WhatsApp', width: 240, padding: 40 },
    { header: 'Tipo de Usuário', width: 240, padding: 40 }
  ]
  async function getDashboardData() {
    const data = await getDashboardApi()
    setDoctor(data.doctor)
    setContractor(data.contractor)
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
        <h1>aaa</h1>
      </S.Body>
    </>
  )
}
export default Dashboard

/*
<div>{doctor.total}</div>
      <div>{contractor.total}</div>

      <Table headers={header}>
        {tableData.map((dataTable: any) => (
          <tr>
            <td>{dataTable.firstName + ' ' + dataTable.lastName}</td>
            <td>{dataTable.email}</td>
            <td>{dataTable.phone}</td>
            <td>{dataTable.profiles[0].name}</td>
          </tr>
        ))}
      </Table>
*/
