import { useEffect, useState } from "react"; 

export default function HexRgb()
{
    const [colorType, setColorType] = useState('hex');
    const [colorV, setColorV] = useState('#000000');
 
    function randomUtility(length){
        return Math.floor(Math.random() * length)
    }

    function getHex()
    { 
        // #229104
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexStr = "#";

        for(let i=0; i < 6; i++)
        {
            hexStr += hex[randomUtility(hex.length)];
        }
        // console.log(hexStr);
        setColorV(hexStr);
    }

    function getRgb()
    { 
        const r = randomUtility(256);
        const b = randomUtility(256);
        const g = randomUtility(256);
        let f = "RGB(" + r + "," + g + "," + b + ")";
       //  console.log(r,g,b);
        setColorV(f);
    }
 
    return (<div style={{
                width:"100vw",
                height: "100vh",
                background: colorV,
               }}
    
         >
 
        <button onClick={()=>setColorType('rgb')}>RGB Color</button>
        <button onClick={()=>setColorType('hex')}>HEX Color</button>
        <button onClick={colorType === 'hex' ? getHex : getRgb}>Generate Random Color</button>
       
        <div> 
           <h3>{colorType === 'hex' ? 'HEX Color' : 'RGB Color'} </h3> 
           <h1>{colorV}</h1>  
        </div> 
    
    </div>
    );

}