export const menusData = [

    { 
        label:"Home", 
        to:"/", 
    }, 
    { 
        label:"Profile", 
        to:"/profile", 
        Children:[ 
            { 
                label:"Detail", 
                to:"details", 
                Children:[  
                { 
                    label:"Location", 
                    to:"location",  
                }, 
                ]  
            }, 
        ]  
    }, 
    { 
        label:"Setting", 
        to:"/setting", 
        Children:[ 
            { 
                label:"Account", 
                to:"account", 
            }, 
        ]  
    }, 
    { 
        label:"Security", 
        to:"/security", 
        Children:[ 
            { 
                label:"Login", 
                to:"login",  
            }, 
            { 
                label:"Register", 
                to:"register",  
            }, 
        ]   
    }, 
]; 

export default menusData;
    
    
    