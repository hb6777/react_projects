import { useState } from "react";
import MenuList from "./menuList";
import { FaPlus, FaMinus } from "react-icons/fa"

export default function MenuItem({ singleItem }) {
    const [displayCurrentLabel, setdisplayCurrentLabel] = useState({});

    function handleToggle(currentLabel) {
        setdisplayCurrentLabel({
            ...displayCurrentLabel, [currentLabel]: !displayCurrentLabel[currentLabel],
        })
    } 
    return (
        <li> 
            <div className="tree-item-container">  
                <p>{singleItem.label}</p>
                {
                    singleItem.Children && singleItem.Children.length > 0 ?
                        <span onClick={() => handleToggle(singleItem.label)} >{  
                            displayCurrentLabel[singleItem.label] ? 
                            <FaMinus color="#fff" size={15} /> : <FaPlus color="#fff" size={15} />
                        }</span>
                        : null
                }  
            </div>
            
                {
                    singleItem.Children && singleItem.Children.length > 0 && displayCurrentLabel[singleItem.label] ?
                        <MenuList datalist={singleItem.Children} />
                        : null
                }
           
        </li>
    );
}


