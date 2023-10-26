import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";
import ArrowBack from "@/assets/arrowback.svg";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import okMark from "@/assets/check-mark-verified.gif"
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { postFaq } from "@/config/api/faqAPI";
import { ToastContainer, toast } from 'react-toastify';

function NewFAQ() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle]= useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [postAPI, setPostAPI] = useState(false)

  const userData =  location.state

  const [show, setShow] = useState(false);
  
  const notify = (text: string): void => {
    toast(text);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function newFaqApi (){
	try{
		await postFaq(title, message, "teste")
		handleShow()
	}
	catch(error){
		notify(error as string)
	}
    
  }

  
  return (
    <>
    
    <Modal show={show} onHide={handleClose} centered >
      
        <Modal.Body>
            <S.ModalBody>
            <button  onClick={handleClose}>
            X
          </button>
          <img src={okMark}  />
            <h2>Pergunta salva com sucesso</h2>
            
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
                  <Input onChange={(e)=>setTitle(e.target.value)}>
                   Titulo
                  </Input>
                </S.InputCustom>

                <S.InputCustom height={182} width={820} >
                  <Input onChange={(e)=>setMessage(e.target.value)}>
                    Mensagem
                  </Input>
                </S.InputCustom>
                
              </S.ContainerData>
              <S.ButtonCustom onClick={() => newFaqApi()}>Salvar</S.ButtonCustom>
              
            </S.ContainerScroll>
          </S.ContainerContent>
        </S.ContainerAll>
		<ToastContainer/>
      </S.Body>

    </>
  );
}
export default NewFAQ;
