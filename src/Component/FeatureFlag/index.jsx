import { useContext, useState } from "react";
import StarRating from "../StarRating";
import TicTakToe from "../TikTakToe";
import Accordian from "../Accordian";
import Autocomplete from "../Autocomplete";  
import { FeatureDataContext } from "./context/context";
import HexRgb from "../HexRgbColor/index.jsx";
 

export default function FeatureFlags(){
    
    const componentToShow = [
        {key: 'showHexRgb',
         component: <HexRgb />},
        {key: 'showAutoComplete',
         component: <Autocomplete />},
        {key: 'showStarRating',
         component: <StarRating />},
        {key: 'showTicTakToe',
         component: <TicTakToe />} 
    ];

    // call the context
    const {loading, enabledFlags} = useContext(FeatureDataContext);

    function checkComponentToShow(getCurrentKey){
        return(enabledFlags[getCurrentKey]);
    }

    return (
        <div>
            <h1 style={{color:'red', fontWeight:'bold'}}>Feature Flags</h1> 
            {
                componentToShow.map(compItem=>(checkComponentToShow(compItem.key) ? <div style={{width:'70%', position:'relative', left:'200px',backgroundColor:'green',marginTop:'70px',marginBottom:'70px'}}>{compItem.component}</div> : null))     
            }
        </div>);
}