import "./styles.css"
import { useState } from "react"
import {FaMinus, FaPlus} from "react-icons/fa"
import MenuList from "./menuList.jsx";  
 
export default function TreeView({menu=[]}){
 
    return (<div className="tree-view-container">
        <MenuList datalist={menu} /> 
    </div>);

}