

export default function AutoResult({dataname}){

  //  console.log('data: ' + dataname + ' , value: ' + searchvalue);
    return (<div>
        {
            dataname.map((item)=>   
                    <p>{item}</p> 
             )
        }
    </div>);
}



