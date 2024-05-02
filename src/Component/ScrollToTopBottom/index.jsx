import { useRef } from "react";
import useFetch from "../UseFetchHook";
 
export default function ScrollToTopBottom(){
  
    const {data, errorMsg, loading} = useFetch('https://dummyjson.com/products?limit=100',{});
    const bottomRef = useRef(null);
 
    function handletoTop(){
        window.scrollTo({top:0,left:0,behavior:'instant'});
    }

    function handletoBottom(){
        bottomRef.current.scrollIntoView({behavior:'smooth'});
    }

    return(<div>
                <h1>Scroll to Bottom / Top</h1>
                <button onClick={handletoBottom}>Go to Bottom</button>
                {
                    data && data.products ? (
                        data.products.map((item)=> (
                            <ul style={{listStyle:'none'}}>
                                {item.title}
                            </ul>
                        ))
                    ) : null
                }
                <div style={{marginBottom:'50px'}}>
                    <button onClick={handletoTop}>Go to Top</button>
                </div>
                <div ref={bottomRef}></div>
        </div>);

}









