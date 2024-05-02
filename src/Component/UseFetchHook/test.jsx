import useFetch from "./index";

export default function UseFetchHookTest({url}){
 
    const {data, errorMsg, loading} = useFetch(url,{});

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                loading ? <div>Loading ... Please wait.</div> : null
            }
            {
                errorMsg ? <div>Error ! ${errorMsg}</div> : null
            } 
                {   
                    data && data.products && data.products.length ?
                        data.products.map((prodItem) =>(
                            <p> ${prodItem.title} </p>
                        )) : null
                } 
            
        </div>
    );
}






