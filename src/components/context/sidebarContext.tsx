import { Dispatch, SetStateAction, createContext } from "react";


type sideBarContextType = [boolean, Dispatch<SetStateAction<boolean>>]

export const sideBarContext = createContext<sideBarContextType>([ true, () => ({})],)


