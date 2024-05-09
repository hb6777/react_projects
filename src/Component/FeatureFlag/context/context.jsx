import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureDataContext = createContext(null);

export default function FeatureGlobalDataContext({children}){

    const [enabledFlags, setEnabledFlags] = useState({});
    const [loading, setLoading] = useState(false);

    async function fetchGlobalData(){

        try{
            setLoading(true)

            const response = await featureFlagDataServiceCall();
            setEnabledFlags(response)
            console.log(response);
            setLoading(false)

        }catch(e){
            console.log(e.message);
            setLoading(false)
            return new Error(e.message)
        } 
    }

    useEffect(()=>{
        fetchGlobalData()
    },[]);
 

    return(
        <FeatureDataContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureDataContext.Provider>
    ); 
}





