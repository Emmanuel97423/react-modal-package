import React from 'react';
import {ReactNode} from 'react';

interface ModalProp {
    width: string;
    height: string;
    content:ReactNode;
    open:boolean;
    handleModal:(e:React.MouseEvent<HTMLButtonElement>, open:boolean) => void;
    handleCloseModal:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}

const Modal:React.FC<ModalProp> = ({width, height, content,open, handleCloseModal})=>{
  

    return(
        <>
       
        <div className={`w-full ${open ? 'fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' : 'hidden' }`}>
            <div className={` w-[${width}px] h-[${height}px]  flex flex-col`}>
                <button className="text-white text-xl place-self-end" onClick={(e)=>{handleCloseModal(e)}}>x</button>
                <div className="bg-white p-4 rounded text-black">{content}</div>
            </div>
        </div>
        </>
    )
}

export default Modal;