import { useEffect, useState } from "react";
import "./styles.css"
import AutoResult from "./result";

export default function Autocomplete() {

    // data reference link: https://dummyjson.com/docs/products
    const [enteredValue, setenteredValue] = useState(''); 
    const [datalist, setdatalist] = useState([]); 
    const [filteredData, setfilteredData,] = useState([]); 
    const [errorMsg, seterrorMsg] = useState('');

    async function fetchSearchData() {

        try {

            const resp = await fetch('https://dummyjson.com/users');
            const data = await resp.json();
            
            //console.log(data);

            if(data && data.users && data.users.length > 0  )
            { 
                const firstnameList = data.users.map(item=> item.firstName.toLowerCase())

                setdatalist(firstnameList);
              //  console.log('first name : ' + firstnameList );
            } 

        } catch (e) {
            seterrorMsg(e.message)
            console.log(e.message);
        } 
    }

    useEffect(() => {
        fetchSearchData();
    }, [enteredValue])
    //   console.log(enteredValue);

    function getsearchresult(event)
    {
        const toLowername = event.target.value.toLowerCase();
        setenteredValue(toLowername);

        if(datalist)
        {
            const filtered =  datalist.filter((name)=> name.length > 1 
            && name.indexOf(toLowername) > -1) ;

            setfilteredData( filtered ); 
        } 
    }

   // console.log(filteredData);

    return (<div>
        <input
            name="search-value"
            type="text"
            value={enteredValue}
            onChange={getsearchresult}
        /> 
        <div>
            {
                datalist && datalist.length > 0 && enteredValue.length > 1 ? <AutoResult dataname={filteredData} /> : null
            }
        </div>
    </div>  
);

}








