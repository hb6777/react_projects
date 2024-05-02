import { useRef, useState } from "react";
import useRefHandleToClose from "./index"

export default function UseClickOutsideToClose(){

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    useRefHandleToClose(ref, ()=>setShowContent(false));

    return( 
        <div>
            {
                showContent ? ( 
                    <div ref={ref} style={{border:'1px solid black',width:'400px',position:'relative',left:'400px'}}>
                        <p>Toogle Modal Closing Example</p>
                        <p>Click outside the content to close.</p> 
                    </div>) 
                : (<button onClick={()=>setShowContent(true)}>Show the content</button>)
            }  
      </div>
    );
}




