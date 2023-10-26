import { ReactNode } from "react";

export type UserType = {
  email: string;
  senha: string;
};

export type DoctorType = {
  total: number;
  available: number;
  unavailable: number;
};

export type dashboardDataTableType = {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  profiles: [
    {
      id: number;
      name: string;
      authority: string;
    }
  ];
};

export type usersType = {
  total?: number;
  totalContractor?: number;
  totalDoctors?: number;
};

export type User = {
  id?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  profiles: [
    {
      id?: number;
      name: string;
      authority?: string;
    }
  ];
  specialties?: [
    {
      id?: number;
      name?: string;
    }
  ];
  address?: [
    {
      id?: number;
      zipcode?: string;
      street?: string;
      number?: string;
      neighborhood?: string;
      city?: string;
      state?: string;
      complement?: string;
    }
  ];
  enabled?: boolean;
  authorities?: [
    {
      authority?: string;
    }
  ];
  username?: string;
};

export type faqDataTableType = {
  title?: string;
};

export type ApiDashboardType = {
  doctor: {
    total: number;
    available: number;
    unavailable: number;
  };
  contractor: {
    total: number;
    available: number;
    unavailable: number;
  };
};

export type notificationsDataTableType = {
  title?: string;
  sendingDate?: string;
};

export type MeType = {
  id?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  profiles?: [
    {
      id: number;
      name: string;
      authority: string;
    }
  ];
  enabled?: boolean;
};

export type LayoutProps = {
  children?: ReactNode;
};

export type OnChangeType = (value: boolean) => void;
export type OnChangeProps = {
  onChange: OnChangeType;
};

export type OnSearchType = (value: string) => void;
export type OnSearchProps = {
  onSearch: OnSearchType;
};

export type TimeProps = {
  locale: string;
};

export type StatusProps = {
  type: "MEDICOS" | "CONTRATANTES";
  n1: number;
  n2: number;
  n3: number;
};

export type CardProps = {
  number: number;
  type: "MEDICOS" | "CONTRATANTES";
  data: number;
};

export type TableItemsProps = {
  header: string;
  width: number;
  padding: number;
};

export type TableProps = {
  headers: Array<{
    header: string;
    width: number;
    padding: number;
  }>;

  children: ReactNode;
};
