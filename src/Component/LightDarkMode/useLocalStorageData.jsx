import { useEffect, useState } from "react";

export default function useLocalStorageData(key, defaultvalue)
{
    const[value,setValue] = useState(()=> {

        let currentValue;

        try{
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultvalue)
            );

        }catch(e){
            console.log(e);
            currentValue = defaultvalue;
        }  
        // console.log('from hook defaultvalue : ',defaultvalue);
        
        // console.log('currentValue : ',currentValue);
        return currentValue;
    });

    useEffect(()=> {
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    // console.log('value : ',value);
    return[value,setValue];

}

// export default function useLocalStorageData(key, defaultvalue) {
//     const [value, setvalue] = useState(() => {

//         let currentValue;

//         try { 
//             currentValue = JSON.parse(
//                 localStorage.getItem(key) || String(defaultvalue)
//             );

//         } catch (e) {
//             console.log(e);
//             currentValue = defaultvalue;
//         }

//         console.log('from hook defaultvalue : ',defaultvalue);
//         return currentValue;
//     });

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value));
//     }, [key,value]);

//     console.log('value : ',value);
     
//     return [value, setvalue];
// }



