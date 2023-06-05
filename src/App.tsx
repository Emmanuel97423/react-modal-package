import React, {useState} from 'react';
 import Modal from './components/Modal';



const App: React.FC = () => {
     const [openModal, setOpenModal] = useState<boolean>(false);

    const handleModal:() => void = ()=>{
        setOpenModal(true)
        }
    const handleCloseModal:() => void = ()=>{
        setOpenModal(false)
        }

    return(
        <>
        <button onClick={()=>setOpenModal(true)}>Active Modal</button>

       <Modal width={'400'} height={'300'} open={openModal}  handleModal={handleModal} handleCloseModal={handleCloseModal}>Modal content</Modal>
        </>
        

    )
}

export default App;