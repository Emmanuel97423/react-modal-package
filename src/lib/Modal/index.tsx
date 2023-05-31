import {ReactNode, useState} from 'react';

interface ModalProp {
    width: string;
    height: string;
    content:ReactNode;
    closeButton: boolean;
    open:boolean;
}

const Modal:React.FC<ModalProp> = ({width, height, content,open, closeButton})=>{
    console.log('open:', open)
    const [openModal, setOpenModal] = useState(open);

    const handleModal:() => void = ()=>{
        setOpenModal(true)
        }


    return(
        <>
       
        <div className={`${openModal ? 'fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' : 'hidden' }`}>
            <div className={`w-[${width}px] h-[${height}px]  flex flex-col`}>
                <button className="text-white text-xl place-self-end" onClick={()=>{setOpenModal(false)}}>x</button>
                <div className="bg-white p-4 rounded text-black">{content}</div>
            </div>
        </div>
        <button onClick={handleModal}>Active Modal</button>
        </>
    )
}

export default Modal;