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
        <div>
        <button onClick={()=>setOpenModal(true)}>Active Modal</button>

            <Modal width={'200'} height={'300'} open={openModal} content="Example" handleModal={handleModal} handleCloseModal={handleCloseModal}/>
        </div>
    )
}

export default App;