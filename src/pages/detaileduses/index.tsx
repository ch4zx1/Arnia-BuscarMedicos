import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";
import ArrowBack from "@/assets/arrowback.svg";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";

function DetailedUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData =  location.state
  return (
    <>
      <S.Body>
        <S.ContainerAll>
          <S.ContainerTop>
            <S.BackButton onClick={() => navigate("/users")}>
              <img src={ArrowBack}></img>
            </S.BackButton>
            <span>Usuário</span>
          </S.ContainerTop>
          <S.ContainerContent>
            <S.ContainerScroll>
              <h1>Dados pessoais</h1>
              <S.ContainerData width="820px" height="194px">
                <S.InputCustom height={56}>
                  <Input disabled value={userData.firstName ? userData.firstName : '-'}>
                    Primeiro nome
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.lastName ? userData.lastName : '-'}>
                    Sobrenome
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.email ? userData.email : '-'}>
                    E-mail
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.phone ? userData.phone: '-'}>
                    WhatsApp
                  </Input>
                </S.InputCustom>
              </S.ContainerData>
              <h1>Endereço</h1>
              <S.ContainerData width="1245px" height="264px">
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.zipcode ? userData.adress.zipcode : '-'}>
                    CEP
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.street ? userData.adress.street : '-'}>
                    Rua
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.number ? userData.adress.number : '-'}>
                    Número
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.neighborhood ? userData.adress.neighborhood : '-'}>
                    Bairro
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.city ? userData.adress.city: '-'}>
                    Cidade
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.state ? userData.adress.state : '-'}>
                    Estado
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={userData.adrress && userData.adress.complement ? userData.adress.complement : '-'}>
                    Complemento
                  </Input>
                </S.InputCustom>
              </S.ContainerData>
              <h1>Dados do currículo</h1>
              <S.ContainerData width="1245px" height="100px">
                <S.InputCustom height={56}>
                  <Input disabled value={userData.specialties && userData.specialties.length > 0
                      ? userData.specialties[0].name
                      : "-"}>
                    Especialidades
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={""}>
                    Cidades que deseja trabalhar
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={""}>
                    Locais de trabalho
                  </Input>
                </S.InputCustom>
              </S.ContainerData>
              <S.ContainerDays>
                <span>Disponibilidade de dia e horário</span>
                <S.ContainerCheckbox>
                  <Checkbox disabled checked>
                    Domingo
                  </Checkbox>
                </S.ContainerCheckbox>
                <S.ContainerPeriod>
                  <S.ContainerCheckbox>
                    <Checkbox checked disabled>
                      Manhã
                    </Checkbox>
                  </S.ContainerCheckbox>
                  <S.ContainerCheckbox>
                    <Checkbox checked disabled>
                      Tarde
                    </Checkbox>
                  </S.ContainerCheckbox>
                  <S.ContainerCheckbox>
                    <Checkbox checked disabled>
                      Noite
                    </Checkbox>
                  </S.ContainerCheckbox>
                </S.ContainerPeriod>
                <S.Separator>
                  <span></span>
                </S.Separator>
                <S.ContainerCheckbox>
                  <Checkbox checked disabled>
                    Sexta
                  </Checkbox>
                </S.ContainerCheckbox>
                <S.Separator>
                  <span></span>
                </S.Separator>
                <S.ContainerCheckbox>
                  <Checkbox checked disabled>
                    Sábado
                  </Checkbox>
                </S.ContainerCheckbox>
              </S.ContainerDays>
              <S.ContainerObs>
                <S.InputCustom height={182}>
                  <Input disabled value={""}>
                    Sobre
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={182}>
                  <Input disabled value={""}>
                    Observações
                  </Input>
                </S.InputCustom>
              </S.ContainerObs>
              <S.ContainerPlan>
                <p>Plano</p>
                <span>Plano X - R$ 200,00</span>
              </S.ContainerPlan>
            </S.ContainerScroll>
          </S.ContainerContent>
        </S.ContainerAll>
      </S.Body>
    </>
  );
}
export default DetailedUser;
