import {useState} from 'react';
// import './App.css'
import Modal from './lib/Modal'

function App() {
const [openModal, setOpenModal] = useState(false)
  return (
    <div className=" flex flex-col justify-center items-center">
    <h1 className='text-4xl'>Modal package</h1>
    <Modal  content="Modal content lorem ipsum" width='600' height='500' open={openModal} closeButton={true}/>
        {/* <button onClick={()=>{setOpenModal(true)}}>Active Modal</button> */}

    </div>
      
  )
}

export default App
