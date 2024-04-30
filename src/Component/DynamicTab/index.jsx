






// *********PROGRAM BY OWN**********
// import { useEffect, useState } from "react"
// import "./styles.css"


// export default function DynamicTabs({resource =[]}){

//     const [datas,setDatas] = useState([]);
//     const [currentTab, setCurrentTab] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState('');
//     const [selectedColor, setSelectedColor] = useState("yellow");
 
//     async function getData(rsc)
//     {
//         if(rsc && rsc.length > 0) {
//           setDatas(rsc);
//         }
//     } 

//     useEffect(()=>{
//         getData(resource)
//     },[resource])

//     function handleClickEvn(getCurrentItem)
//     {  
//        // console.log(getCurrentItem.content, getCurrentItem.id);

//         if(selectedColor === "green") {
//             setSelectedColor("yellow");
//         }else{
//             setSelectedColor("green");
//         }
//         //console.log(selectedColor);

//         setCurrentTab(getCurrentItem);
//     }

//     // console.log(currentTab.id);
//     // console.log(currentTab.content);

//     return(<div className="tab-container">
//             <div>
//             { 
//                  resource && resource.length > 0 ?
//                     resource.map(item=>                            
                             
//                                 <span onClick={()=>handleClickEvn(item)}
//                                       className={(currentTab===item) ? "active" : "inactive"}
//                                 >
//                                         {item.id} 
//                                 </span>
                             
//                     ) 
//                     : null
//             }
//             </div>
//             <div className="tab-content-container">
//                 {
//                     currentTab ? 
//                         <div>{currentTab.content}</div>
//                     : null
//                 }
//             </div>
//     </div>);

// }


