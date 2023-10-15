import { ReactNode } from 'react'
import * as S from './style'

type Props = {
  header: string
  width: number
  padding: number
}

type TableProps = {
  headers: Array<{
    header: string
    width: number
    padding: number
  }>

  children: ReactNode
}

export default function Table({ headers, children }: TableProps) {
  return (
    <S.ContainerTable>
      <S.Table cellSpacing={0}>
        <thead>
          <tr>
            {headers.map((data: Props) => (
              <th style={{ width: data.width, paddingLeft: data.padding }}>
                {data.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </S.ContainerTable>
  )
}
