import Tabs from "./tabs"

export default function TabParent(){
 
    function RandomText(){
        return (<h1>Random Text</h1>);
    } 
    const resourceData = [ 
        {
            id: "1",
            content: "Example #1",
        },
        {
            id: "2",
            content: "1 + 1 = 2",
        },
        {
            id: "3",
            content: <RandomText />,
        } 
    ];

    function handleChange(currentIndex)
    {
        // This part can be calling API for db interaction or etc
        console.log(currentIndex);
    }

    return(
        
        <Tabs source={resourceData} onchange={handleChange} />

    ); 
}







