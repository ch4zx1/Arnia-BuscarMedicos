import { Dispatch, SetStateAction, createContext } from "react";

export type sideBar = {
  open: boolean;
};

type sideBarContextType = [sideBar, Dispatch<SetStateAction<sideBar>>]

export const sideBarContext = createContext<sideBarContextType>([ {open:true}, () => ({})],)


