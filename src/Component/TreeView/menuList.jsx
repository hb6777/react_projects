import MenuItem from "./menuItem"; 
 

export default function MenuList({datalist=[]})
{  
    return (
        <ul className="tree-list-container">
         {
            datalist && datalist.length ? 
                datalist.map((item)=><MenuItem singleItem={item} />) : null
         }  
        </ul>
    );
}








