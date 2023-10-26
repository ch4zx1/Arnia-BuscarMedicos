import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./styles";
import Logo from "@/assets/logo.svg";
import LogoLite from "@/assets/logolite.svg";

import DashboardImg from "@/assets/sidebar-icons/white/pie-two.svg";
import UserImg from "@/assets/sidebar-icons/white/every-user.svg";
import PlansImg from "@/assets/sidebar-icons/white/dollar.svg";
import PaymentsImg from "@/assets/sidebar-icons/white/pay-code-two.svg";
import SpecialtiesImg from "@/assets/sidebar-icons/white/composition.svg";
import NotificationsImg from "@/assets/sidebar-icons/white/remind.svg";
import FaqImg from "@/assets/sidebar-icons/white/help.svg";

import DashboardImgGreen from "@/assets/sidebar-icons/green/pie-two.svg";
import UserImgGreen from "@/assets/sidebar-icons/green/every-user.svg";
import PlansImgGreen from "@/assets/sidebar-icons/green/dollar.svg";
import PaymentsImgGreen from "@/assets/sidebar-icons/green/pay-code-two.svg";
import SpecialtiesImgGreen from "@/assets/sidebar-icons/green/composition.svg";
import NotificationsImgGreen from "@/assets/sidebar-icons/green/remind.svg";
import FaqImgGreen from "@/assets/sidebar-icons/green/help.svg";
import { sideBarContext } from "../context/sidebarContext";

function Sidebar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const [isMenuOpen, setMenuOpen] = useContext(sideBarContext);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location]);

  return (
    <>
      <sideBarContext.Provider value={[isMenuOpen, setMenuOpen]}>
        <S.Body menuOpen={isMenuOpen}>
          <S.ContainerLogo menuOpen={isMenuOpen}>
            {isMenuOpen === true ? (
              <img src={Logo} alt="Logo" />
            ) : (
              <img src={LogoLite} alt="Logo" />
            )}
          </S.ContainerLogo>
          <S.ContainerButton menuOpen={isMenuOpen}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/dashboard")}
                className={activeButton === "/dashboard" ? "active" : ""}
              >
                <img
                  src={
                    activeButton === "/dashboard"
                      ? DashboardImgGreen
                      : DashboardImg
                  }
                  alt="Dashboard"
                />
                {isMenuOpen === true ? "Dashboard" : ""}
              </button>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/users")}
                className={activeButton === "/users" ? "active" : ""}
              >
                <img
                  src={activeButton === "/users" ? UserImgGreen : UserImg}
                  alt="Usuários cadastrados"
                />
                {isMenuOpen === true ? "Usuários cadastrados" : ""}
              </button>
            </Link>
            <Link to="/plans" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/plans")}
                className={activeButton === "/plans" ? "active" : ""}
              >
                <img
                  src={activeButton === "/plans" ? PlansImgGreen : PlansImg}
                  alt="Planos"
                />
                {isMenuOpen === true ? "Planos" : ""}
              </button>
            </Link>
            <Link to="/payments" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/payments")}
                className={activeButton === "/payments" ? "active" : ""}
              >
                <img
                  src={
                    activeButton === "/payments"
                      ? PaymentsImgGreen
                      : PaymentsImg
                  }
                  alt="Pagamentos"
                />
                {isMenuOpen === true ? "Pagamentos" : ""}
              </button>
            </Link>
            <Link to="/specialties" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/specialties")}
                className={activeButton === "/specialties" ? "active" : ""}
              >
                <img
                  src={
                    activeButton === "/specialties"
                      ? SpecialtiesImgGreen
                      : SpecialtiesImg
                  }
                  alt="Especialidades"
                />
                {isMenuOpen === true ? "Especialidades" : ""}
              </button>
            </Link>
            <Link to="/notifications" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/notifications")}
                className={activeButton === "/notifications" ? "active" : ""}
              >
                <img
                  src={
                    activeButton === "/notifications"
                      ? NotificationsImgGreen
                      : NotificationsImg
                  }
                  alt="Notificações"
                />
                {isMenuOpen === true ? "Notificações" : ""}
              </button>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("/faq")}
                className={activeButton === "/faq" ? "active" : ""}
              >
                <img
                  src={activeButton === "/faq" ? FaqImgGreen : FaqImg}
                  alt="FAQ"
                />
                {isMenuOpen === true ? "FAQ" : ""}
              </button>
            </Link>
          </S.ContainerButton>
        </S.Body>
      </sideBarContext.Provider>
    </>
  );
}

export default Sidebar;
