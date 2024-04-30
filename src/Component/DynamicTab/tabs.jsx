import { useState } from "react";
import "./styles.css"

export default function Tabs({source, onchange}){

    const[currentIndex, setCurrentIndex] = useState(-1);
    
    function handleClick(getCurrentIndex)
    {
        setCurrentIndex(getCurrentIndex);
        onchange(getCurrentIndex);
    }

    return(<div className="wrapper">
               <div className="tab-container">
                    {
                        source.map((item,index)=>
                            <div onClick={()=>handleClick(index)} className={`tab-item ${currentIndex === index ? 'avtive' : ''}`}>
                                {item.id} 
                            </div>)
                    }
               </div>
               <div className="content-container">
                    {
                        source[currentIndex] && source[currentIndex].content
                    }
               </div>
          </div>);
}


