import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";
import ArrowBack from "@/assets/arrowback.svg";
import Input from "@/components/ui/input";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { postNotification } from "@/config/api/notificationAPI";
import okMark from "@/assets/check-mark-verified.gif";
import { ToastContainer, toast } from "react-toastify";

function NewNotification() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const userData = location.state;

  const [confirmationShow, setConfirmationShow] = useState(false);

  const handleConfirmationClose = () => setConfirmationShow(false);
  const handleConfirmationShow = () => setConfirmationShow(true);

  const [confirmatedShow, setConfirmatedShow] = useState(false);

  const handleConfirmatedClose = () => setConfirmatedShow(false);
  const handleConfirmatedShow = () => setConfirmatedShow(true);

  const notify = (text: string): void => {
    toast(text);
  };

  async function newNotificationApi() {
    try {
      await postNotification(title, message, "teste");
      handleConfirmationClose();
      handleConfirmatedShow();
      setTimeout(() => navigate("/notifications"), 2000);
    } catch (error) {
      notify(error as string);
    }
  }

  return (
    <>
      <Modal
        show={confirmationShow}
        onHide={handleConfirmationClose}
        centered
        size="xl"
      >
        <Modal.Body>
          <S.ModalHeader>
            <div>
              {" "}
              <h2>Confirme os dados da notificação</h2>
              <button onClick={handleConfirmationClose}>X</button>
            </div>
            <h4>
              Destinatário: <span>CONTRATANTE</span>
            </h4>
          </S.ModalHeader>
          <S.ModalBody>
            <S.ContainerScroll>
              <S.ContainerData width="820px" height="194px">
                <S.InputCustom height={56}>
                  <Input disabled value={title}>
                    Titulo
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input disabled value={date}>
                    Data de envio
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={182} width={820}>
                  <Input disabled value={message}>
                    Mensagem
                  </Input>
                </S.InputCustom>
              </S.ContainerData>
            </S.ContainerScroll>
            <S.ModalFooter>
              <h2>
                Esse procedimento <span>não pode ser desfeito</span>
              </h2>
              <S.CancelButton onClick={handleConfirmationClose}>
                Cancelar
              </S.CancelButton>
              <S.ConfirmButton
                onClick={() => {
                  newNotificationApi();
                }}
              >
                Confirmar e enviar notificação
              </S.ConfirmButton>
            </S.ModalFooter>
          </S.ModalBody>
        </Modal.Body>
      </Modal>

      <Modal show={confirmatedShow} onHide={handleConfirmatedClose} centered>
        <Modal.Body>
          <S.ModalBody>
            <button onClick={handleConfirmatedClose} className="closeButton">
              X
            </button>
            <img src={okMark} />
            <h2>Notificação salva com sucesso</h2>
          </S.ModalBody>
        </Modal.Body>
      </Modal>

      <S.Body>
        <S.ContainerAll>
          <S.ContainerTop>
            <S.BackButton onClick={() => navigate("/notifications")}>
              <img src={ArrowBack}></img>
            </S.BackButton>
            <span>Nova Notificação</span>
          </S.ContainerTop>
          <S.ContainerContent>
            <S.ContainerScroll>
              <h1>Dados da notificação</h1>
              <S.ContainerData width="820px" height="194px">
                <S.InputCustom height={56}>
                  <Input onChange={(e) => setTitle(e.target.value)}>
                    Titulo
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={56}>
                  <Input type="date" onChange={(e) => setDate(e.target.value)}>
                    Data de envio
                  </Input>
                </S.InputCustom>
                <S.InputCustom height={182} width={820}>
                  <Input onChange={(e) => setMessage(e.target.value)}>
                    Mensagem
                  </Input>
                </S.InputCustom>
              </S.ContainerData>
              <S.ButtonCustom onClick={() => handleConfirmationShow()}>
                Salvar
              </S.ButtonCustom>
            </S.ContainerScroll>
          </S.ContainerContent>
        </S.ContainerAll>
      </S.Body>
    </>
  );
}
export default NewNotification;
