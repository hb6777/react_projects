import useLocalStorageDT from "./useLocalStorageData";
import "./style.css"
import { useState } from "react";

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorageDT("theme", "dark");

    function handleToogleTheme() {
        setTheme(theme === "dark" ? "light" : "dark") 
    }
   // console.log(theme);

    return (
            <div className="light-dark-container" data-theme={theme}>
                <div className="content-container">
                    <p>HELLO WORLD!</p>
                    <button onClick={handleToogleTheme}>Change Theme</button>
                </div>
            </div>
        );
}
 

// export default function LightDarkMode() {
//     const [theme, setTheme] = useLocalStorageDT("theme", "dark");

//     function handleChangeColor() {
//         setTheme(theme === "light" ? "dark" : "light")
//     }

// console.log(theme);

//     return (

//         <div className="mode-container"  data-theme={theme}>
//              <div className="section-container">
//                 <p>Hello World!</p>
//                 <button onClick={handleChangeColor}>Theme</button>
//             </div>
//         </div>

//     );
// }



