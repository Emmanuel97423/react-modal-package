import React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

interface ModalProp {
    width: string;
    height: string;
    children:ReactNode;
    open:boolean;
    handleModal:(e:React.MouseEvent<HTMLButtonElement>, open:boolean) => void;
    handleCloseModal:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}



const Modal:React.FC<ModalProp> = ({  width, height, children, open, handleCloseModal})=>{
  const ModalWrapper = styled.div<Partial<ModalProp>>`
  width: 100%;
  height: 100vh;
  position: ${(props) => (props.open ? "fixed" : "none")};
  top: 0;
  left: 0;
  inset: 0;
  background: ${(props) => (props.open ? "rgba(0, 0, 0, 0.25)" : "none")}; 
  backdrop-filter: ${(props) => (props.open ? "blur(5px)" : "none")};
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div<Partial<ModalProp>>`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.25rem;
  color: black;
`;
const CloseButton = styled.button`
  color: black;
  font-size: 1.5rem;
  align-self: end;
`;
  

    return(
       
       
        <ModalWrapper open={open}>
            <ModalContent width={width} height={height} >
                <CloseButton onClick={(e)=>{handleCloseModal(e)}}>x</CloseButton>
                <Content>{children}</Content>
            </ModalContent>
        </ModalWrapper>
        
    )
}

export default Modal;