import { useEffect, useState } from "react";


export default function useFetch(url, options = {}) {
   // console.log(url);

    const [data, setData] = useState(null);
    const [errorMsg, seterrorMsg] = useState(null);
    const [loading, setloading] = useState(false);

    async function fetchDataList() {
        setloading(true)

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(response.statusText); 
            const prodData = await response.json();
          //  console.log(prodData); 
            setData(prodData)
            setloading(false)
            seterrorMsg(null)
        } catch (e) {
            seterrorMsg(`${e}. Error Occured!`)
            setloading(false)
        }
    }

    useEffect(() => {
        fetchDataList()
    }, [url]);
  
    return { data, errorMsg, loading };
}








