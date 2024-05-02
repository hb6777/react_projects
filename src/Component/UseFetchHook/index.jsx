import { useEffect, useState } from "react";


export default function useFetch( url,options ={} )
{
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    async function fetchData(){
        
        try{
            
            setloading(true)
            const response = await fetch(url);
            // if(!response.ok) {
            //     seterror(response.status)
            // }
            const result = await response.json();
             setdata(result.products)
            if(result) {
            console.log(result.products);
              setloading(false)
            }

        }catch(e){
            seterror(e) 
            setloading(false) 
        }

    }

    useEffect(()=>{
        fetchData()
    },[url]);

   return { data, error, loading };

     
}








