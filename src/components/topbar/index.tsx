import * as S from "./styles";
import { getMeApi } from "@/config/api/meAPI";
import HamburguerImage from "@/assets/hamburguer.svg";
import UserImage from "@/assets/user.svg";
import ArrowImage from "@/assets/arrow.svg";
import { Button } from "../ui";
import { useContext, useEffect, useState } from "react";
import { sideBarContext } from "@/components/context/sidebarContext";
import { MeType } from "@/config/types";
import Dropdown from "../dropdown";
import { ToastContainer, toast } from "react-toastify";

function TopBar() {
  const [me, setMe] = useState<MeType>({});
  const notify = (text: string): void => {
    toast(text);
  };

  async function getMeData() {
    try {
      const data = await getMeApi();
      if (data) {
        setMe(data);
      } else {
        notify("Erro ao obter dados do usuário.");
      }
    } catch (error) {
      notify(error as string);
    }
  }

  useEffect(() => {
    getMeData();
  }, []);

  const [sideBar, setSideBar] = useContext(sideBarContext);
  const [dropdown, setDropdown] = useState(false);

  const handleDropDown = () => {
    setDropdown(!dropdown);
  };

  const handleMenuToggle = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <sideBarContext.Provider value={[sideBar, setSideBar]}>
        <S.Body menuOpen={sideBar}>
          <Button style={{ cursor: "pointer" }} onClick={handleMenuToggle}>
            <img src={HamburguerImage}></img>
          </Button>
          <S.ContainerRight>
            <S.ContainerUser>
              <img src={UserImage}></img>
              <S.ContainerUserInfo>
                <span>{me.firstName}</span>
                <p>{me.email}</p>
              </S.ContainerUserInfo>
            </S.ContainerUser>
            <Button style={{ cursor: "pointer" }} onClick={handleDropDown}>
              <img src={ArrowImage}></img>
            </Button>
            <S.ContainerDropdown>
              {dropdown ? <Dropdown onChange={handleDropDown}></Dropdown> : ""}
            </S.ContainerDropdown>
          </S.ContainerRight>
        </S.Body>
        <ToastContainer />
      </sideBarContext.Provider>
    </>
  );
}
export default TopBar;
