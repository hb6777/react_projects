import { useEffect, useState } from "react";
import "./styles.css"

export default function CustomScrollIndicator({ url }) {

    // Use data from: https://dummyjson.com/products
    const [prodData, setProdData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchProductData(getURL) {
        try {
            setLoading(true);

            const resp = await fetch(getURL);
            const dataset = await resp.json();

            //console.log(dataset.products.length);
            if (dataset && dataset.products && dataset.products.length > 0) {
                setProdData(dataset.products);
                setLoading(false);
            }
            //  console.log(prodData);
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductData(url);
    }, [url]);

    function handleProgressMovement()
    {
        console.log(document.body.scrollTop, 
            document.documentElement.scrollTop, 
            document.documentElement.scrollHeight, 
            document.documentElement.clientHeight);

            const currentTop = document.documentElement.scrollTop || document.body.scrollTop;
            const height = (document.documentElement.scrollHeight-document.documentElement.clientHeight);

            setScrollPercentage ((currentTop/height)*100);    
    }

    useEffect(() => { 
        window.addEventListener('scroll', handleProgressMovement); 
        return()=>{
            window.removeEventListener('scroll',()=>{});    
        }
    })


    if (loading) {
        return (<div>Loading data ... Please wait.</div>);
    }

    if (errorMsg != '') {
        return (<div>Error occured! {errorMsg} </div>);
    }

    function openURL(imgURL)
    {
        window.open(imgURL);
    }

    // console.log('dataset prodData:', prodData);
    return (<div>
                <div className="progress-container">
                    Custom Process Bar / Scroll Indicator
                    <div className="progress-bar" style={{width:`${scrollPercentage}%`}}></div>
                </div>
                <div className="data-container">
                    {
                        prodData && prodData.length > 0 ?
                            prodData.map((prodItem) => 
                                <div style={{border:'1px solid'}}>
                                    <p>{prodItem.title}</p>
                                    <img onClick={()=>openURL(`${prodItem.thumbnail}`)} src={prodItem.thumbnail} alt={prodItem.title} />
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
    );
}





