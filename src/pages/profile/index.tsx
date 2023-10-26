import * as S from "./styles";
import ArrowWhite from "@/assets/right.svg";
import ArrowGrey from "@/assets/rightc.svg";
import ArrowBack from "@/assets/arrowback.svg";
import Edit from "@/assets/edit.svg";
import Delete from "@/assets/delete.svg";
import Plus from "@/assets/plus.svg";
import { useEffect, useState } from "react";
import { getMeApi } from "@/config/api/meAPI";
import Checkbox from "@/components/ui/checkbox";
import { MeType } from "@/config/types";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
  const [me, setMe] = useState<MeType>({});
  const [active, setActive] = useState("Dados");
  const [activeadmin, setActiveAdmin] = useState<null | number>(null);
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

  const admins = [
    { firstname: "Bruno", lastname: "Alves", email: "bruno@gmail.com" },
    { firstname: "Júlio", lastname: "Soares", email: "julio@gmail.com" },
    { firstname: "Mariana", lastname: "Goulart", email: "mariana@gmail.com" },
  ];

  return (
    <S.Body>
      <h1>Edição de Perfil</h1>
      <S.ContainerContent>
        <S.ContainerLeft>
          <S.Button
            className={active === "Dados" ? "active" : ""}
            onClick={() => setActive("Dados")}
          >
            <span>Dados</span>
            <img src={active === "Dados" ? ArrowWhite : ArrowGrey}></img>
          </S.Button>
          <S.Button
            className={active === "Senha" ? "active" : ""}
            onClick={() => setActive("Senha")}
          >
            <span>Alterar senha</span>
            <img src={active === "Senha" ? ArrowWhite : ArrowGrey}></img>
          </S.Button>
          <S.Button
            className={active === "Admin" ? "active" : ""}
            onClick={() => setActive("Admin")}
          >
            <span>Administradores</span>
            <img src={active === "Admin" ? ArrowWhite : ArrowGrey}></img>
          </S.Button>
        </S.ContainerLeft>
        <S.ContainerRight>
          {active === "Dados" ? (
            <>
              <h2>Dados</h2>
              <S.ContainerInfo>
                <span>Nome</span>
                <p>
                  {(me.firstName ? me.firstName : "-") +
                    " " +
                    (me.lastName ? me.lastName : "-")}
                </p>
                <S.ButtonEdit>
                  <img src={Edit} alt="editar" />
                </S.ButtonEdit>
              </S.ContainerInfo>
              <S.Separator></S.Separator>
              <S.ContainerInfo>
                <span>E-mail</span>
                <p>{me.email}</p>
                <S.ButtonEdit>
                  <img src={Edit} alt="editar" />
                </S.ButtonEdit>
              </S.ContainerInfo>
            </>
          ) : null}

          {active === "Admin" && activeadmin === null ? (
            <>
              <h2>Administrar perfis</h2>
              {admins.map((admin, index) => (
                <div key={index}>
                  <S.ContainerInfo>
                    <span>{admin.firstname}</span>
                    <p>{admin.email}</p>
                    <S.ContainerActions>
                      <S.ButtonEdit>
                        <img
                          src={Edit}
                          alt="editar"
                          onClick={() => setActiveAdmin(index)}
                        />
                      </S.ButtonEdit>
                      <S.ButtonEdit>
                        <img src={Delete} alt="deletar" />
                      </S.ButtonEdit>
                    </S.ContainerActions>
                  </S.ContainerInfo>
                  <S.Separator></S.Separator>
                </div>
              ))}
              <S.ModalButton>
                <img src={Plus}></img>
                <span>Novo Perfil</span>
              </S.ModalButton>
            </>
          ) : null}
          {active === "Admin" && activeadmin !== null ? (
            <>
              <S.ContainerTop>
                <S.BackButton onClick={() => setActiveAdmin(null)}>
                  <img src={ArrowBack}></img>
                </S.BackButton>
                <h2>
                  {admins[activeadmin].firstname +
                    " " +
                    admins[activeadmin].lastname}
                </h2>
              </S.ContainerTop>
              <S.ContainerInfo>
                <span>Nome</span>
                <p>
                  {admins[activeadmin].firstname +
                    " " +
                    admins[activeadmin].lastname}
                </p>
                <S.ButtonEdit>
                  <img src={Edit} alt="editar" />
                </S.ButtonEdit>
              </S.ContainerInfo>
              <S.Separator></S.Separator>
              <S.ContainerInfo>
                <span>E-mail</span>
                <p>{admins[activeadmin].email}</p>
                <S.ButtonEdit>
                  <img src={Edit} alt="editar" />
                </S.ButtonEdit>
              </S.ContainerInfo>
              <S.Separator></S.Separator>
              <S.ContainerInfo>
                <span>Senha</span>
                <p>*************</p>
                <S.ButtonEdit>
                  <img src={Edit} alt="editar" />
                </S.ButtonEdit>
              </S.ContainerInfo>
              <S.Separator></S.Separator>
              <S.ContainerPermissions>
                <span>Permissões</span>
                <S.ContainerCB>
                  <Checkbox checked>Admin. geral</Checkbox>
                </S.ContainerCB>
                <S.ContainerCB>
                  <Checkbox>Admin. parcial</Checkbox>
                </S.ContainerCB>
                <S.ContainerDButtons>
                  <S.ContainerButtonLeft>
                    <button>Salvar</button>
                  </S.ContainerButtonLeft>
                  <S.ContainerButtonRight>
                    <button>Excluir perfil</button>
                  </S.ContainerButtonRight>
                </S.ContainerDButtons>
              </S.ContainerPermissions>
            </>
          ) : null}
        </S.ContainerRight>
      </S.ContainerContent>
      <ToastContainer />
    </S.Body>
  );
}

export default Profile;
