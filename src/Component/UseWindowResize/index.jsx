import { useLayoutEffect, useState } from "react";


export default function useWindowResizeHook(){

    const [windowSize, setWindowSize] = useState({ width:0,height:0 });

    function handleresizeWindow(){ 
        setWindowSize({width: window.innerWidth, height: window.innerHeight}) 
    } 

    useLayoutEffect(()=>{ 
        handleresizeWindow() 
        window.addEventListener("resize",handleresizeWindow);

        return ()=> {
            window.removeEventListener("resize",handleresizeWindow);
        } 
    },[])

    return windowSize;


}







