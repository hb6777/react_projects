import { useState } from "react";
import sampleData from "./data.js";
import "./styles.css"

export default function Accordian() {

    const [singleSelect, setSingleSelect] = useState(null);
    const [multiSelection, setMultiSelection] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    function getSingleID(id) {
        // console.log(id);
        setSingleSelect(id == singleSelect ? null : id);
    }

    function getMultipleIDs(id) {
        let cpyMulti = [...multiSelection];
        const findcurrentId = cpyMulti.indexOf(id);

       // console.log(id);
        (findcurrentId === -1) ? cpyMulti.push(id) : cpyMulti.splice(findcurrentId, 1);
      //  console.log(findcurrentId);

        setMultiSelection(cpyMulti);
    }
    
    console.log(isChecked, multiSelection);

    // function handleCheck()
    // {
    //     setIsChecked(isChecked == true ? false : true); 
    //     // console.log(isChecked);
    // }

    return (
        <div className="wrapper">  <label>Multi</label>
            <input type="checkbox" name="multi" onChange={() => setIsChecked(!isChecked)} />
            {/* <input className="chkMulti" type="checkbox" name="multi" onChange={handleCheck} checked={isChecked} /> */}
            <label for="multi">Multi Selection</label>
            <div className="accordian">
                {
                    sampleData && sampleData.length > 0 ?
                        (sampleData.map(dta =>
                            <div className="item">
                                <div
                                    onClick={!isChecked ?
                                        () => getSingleID(dta.id)
                                      : () => getMultipleIDs(dta.id)
                                    } className="title">
                                    <h3>{dta.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    singleSelect === dta.id || multiSelection.indexOf(dta.id) !== -1 ?
                                        <div className="content">{dta.answer}</div>
                                        : null
                                }
                            </div>)
                        )
                        :
                        (<div>No record!</div>)
                }
            </div>
        </div>);

}
