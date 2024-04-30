import ModalParent from "./modalparent"; 

export default function Modal_Popup({id,mHeader, mBody, mFooter, closePopup}){
 
    return (<div id={id || 'Modal'} className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="closeicon-container" onClick={closePopup}>&times;</span>
                    {
                        mHeader ? mHeader : "Default Header"
                    }
                </div>
                <div className="modal-body">
                    {
                        mBody ? mBody : "Default Body"
                    }
                </div>
                <div className="modal-footer">
                    {
                        mFooter ? mFooter : "Default Footer"
                    }
                </div> 
        </div>
    </div>) 
}



