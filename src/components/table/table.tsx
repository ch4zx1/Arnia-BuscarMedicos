import { ReactNode } from "react";
import * as S from "./style";
import { TableProps, TableItemsProps } from "@/config/types";

export default function Table({ headers, children }: TableProps) {
  return (
    <S.ContainerTable>
      <S.Table cellSpacing={0}>
        <thead>
          <tr>
            {headers.map((data: TableItemsProps) => (
              <th style={{ width: data.width, paddingLeft: data.padding }}>
                {data.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </S.ContainerTable>
  );
}
