import useFetch from "./";
import "./index"; 

export default function UseFetchHookTest(){

    const {data, error, loading} = useFetch('https://dummyjson.com/products/',{});

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                loading ? <div>Loading ... Please wait.</div> : null
            }
            {
                error ? <div>Error ! ${error}</div> : null
            }
            {
                data && data.products && data.products.lenght > 0 ?
                    data.products.map((prodItem)=>{
                        <p key={prodItem.id}>{prodItem.title}</p>
                    })
                : null
            } 
        </div>
    );
}






