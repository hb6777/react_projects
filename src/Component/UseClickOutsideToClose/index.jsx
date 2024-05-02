import { useEffect } from "react";
 
export default function useRefHandleToClose(ref, handler){
  
    useEffect(()=> {
        function listener(event)
        {
            // console.log(!ref.current );
            // console.log(event.target);

            if(!ref.current || ref.current.contains(event.target))
                return;

            handler(event);
        }

        document.addEventListener("mousedown",listener);
        document.addEventListener("touchstart",listener);

        return ()=>{
            document.removeEventListener("mousedown",listener);
            document.removeEventListener("touchstart",listener); 
        }

    })



}






