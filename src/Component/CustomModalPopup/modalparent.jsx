import { useState } from "react";
import Modal_Popup from "./modal";
import "./modal.css"

export default function ModalParent(){

    const[showModal, setShowModal] = useState(false);

    function handleToogleModal()
    {
        setShowModal(!showModal)
        console.log(showModal);
    }

    function onClosePopup(){
        setShowModal(false)    
    }

      return(<div className="parentmodal-container">
                <button  className="parentmodal-container" onClick={handleToogleModal}>Open Modal Popup</button> 
                {
                    showModal && <Modal_Popup  mHeader={'CUSTOMER HEADER'} mBody={'CUSTOMER BODY'} mFooter={'CUSTOMER FOOTER'} closePopup={onClosePopup}  />
                }
            </div>
        )

}



