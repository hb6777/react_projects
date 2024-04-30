import { useEffect, useState } from "react"
import './styles.css'


export default function LoadMoreData({ limit = 10, skip = 10, stopat=8 }) {
    // using API to get data from:
    // https://dummyjson.com/products?limit=10&skip=10&select=title,price

    const [loading, setLoading] = useState(false);
    const [productlist, setproductlist] = useState([]);
    const [countBtnClick, setcountBtnClick] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProductList() {
        try {
            setLoading(true);
             const resp = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${countBtnClick === 0 ? 0 : countBtnClick * skip}`);
            //  const resp = await fetch('https://dummyjson.com/products?limit=10&skip=10');
              const prodData = await resp.json();

//   console.log(countBtnClick * skip);

             if (prodData && prodData.products.length > 0) {
                setproductlist((prevData) => [...productlist, ...prodData.products]);
              //  console.log(prodData.products.length);
                setLoading(false);
             }

        } catch (e) {
            setLoading(false);
          //  console.log(e);
        }
    }

    useEffect(() => {
        fetchProductList()}, [countBtnClick]
   );
  
//    console.log(productlist.length);
//    console.log(stopat);

    useEffect(() => {
          if (productlist && productlist.length >= stopat ) setDisableBtn(true); },
          [productlist]);

    if (loading) {
        return <div>Loading now ... please wait.</div>;
    }

    return(
    <div className="load-data-container">
        <div className="product-container">
        {
                productlist && productlist.length ?
                    productlist.map(prodItem=>(
                        <div className="prod-item" key={prodItem.id}>
                            <img src={prodItem.thumbnail} alt={prodItem.title} />
                            <p>{prodItem.title}</p>
                            {/* <p style='font-weight:bold;'>JSON.stringfy(parseFloat({prodItem.price}))</p> */}
                        </div>
                        ))
                : null
        }
        </div>
        <div className="disableBtn">
            <button disabled={disableBtn} onClick={() => setcountBtnClick(countBtnClick + 1)}>Load More Products</button>
            {
                disableBtn ? <div>You have reached maximum {stopat} products.</div> : null
            }
        </div>
    </div>)
}









