import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";
import ArrowBack from "@/assets/arrowback.svg";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import okMark from "@/assets/check-mark-verified.gif";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { postFaq } from "@/config/api/faqAPI";
import { ToastContainer, toast } from "react-toastify";
import TextArea from "@/components/ui/textarea";

function NewFAQ() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const notify = (text: string): void => {
    toast(text);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function newFaqApi() {
    if (title != "" && message != "") {
      try {
        await postFaq(title, message, "teste");
        handleShow();
        setTimeout(() => navigate("/faq"), 2000);
      } catch (error) {
        notify(error as string);
      }
    } else {
      notify("Preenche os campos antes de enviar.");
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <S.ModalBody>
            <button onClick={handleClose}>X</button>
            <img src={okMark} />
            <S.ContainerConfirmation>
              <span>Pergunta salva com sucesso</span>
            </S.ContainerConfirmation>
          </S.ModalBody>
        </Modal.Body>
      </Modal>

      <S.Body>
        <S.ContainerAll>
          <S.ContainerTop>
            <S.BackButton onClick={() => navigate("/faq")}>
              <img src={ArrowBack}></img>
            </S.BackButton>
            <span>Novo FAQ</span>
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

                <S.InputCustom height={182} width={820}>
                  <TextArea onChange={(e) => setMessage(e.target.value)}>
                    Mensagem
                  </TextArea>
                </S.InputCustom>
              </S.ContainerData>
              <S.ButtonCustom onClick={() => newFaqApi()}>
                Salvar
              </S.ButtonCustom>
            </S.ContainerScroll>
          </S.ContainerContent>
        </S.ContainerAll>
        <ToastContainer />
      </S.Body>
    </>
  );
}
export default NewFAQ;
