import { useState } from "react";
import QRCodeRCT from "react-qr-code"
import "./styles.css"

export default function QRCode()
{
    const [input,setinput] = useState('');
    const [qrc,setqrc] = useState('');

    function handleClick()
    {
        setqrc(input);
        setinput('');
    }
 
    return(<div>

        <div>
            <input onChange={(e)=>setinput(e.target.value)} type="text" name="searchvalue" value={input} placeholder="Enter your name here" />
            <button disabled={input && input.trim().length > 0 ? false : true} onClick={handleClick}>Generate QR Code</button>
        </div>
        <div className="qrcode-wrapper">
            <QRCodeRCT 
                value={qrc}
                size={400}
                id="qr-id" 
            />
        </div>

    </div>);

}





