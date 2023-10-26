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
	id?: number,
	email?: string,
	firstName?: string,
	lastName?: string,
	profiles?: [{
	  id: number,
	  name: string,
	  authority: string;
	}];
	enabled?: boolean;
  };