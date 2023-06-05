import React, {useState} from 'react';
 import Modal from './components/Modal';



const App: React.FC = () => {
     const [openModal, setOpenModal] = useState(false);

    const handleModal:() => void = ()=>{
        setOpenModal(true)
        }

    return(
        <div>
            <Modal width={'200'} height={'300'} open={openModal} content="Example" handleModal={handleModal}/>
        </div>
    )
}

export default App;