import { useState, useRef, useEffect } from "react";
import "./styles.css"

export default function ToDoList() {

    const refText=useRef(null);  
    const [text,settext]=useState(''); 
    const [tasks, settasks] = useState([]);  
 

    function addToDo(text){  
          const newTask = {id:Date.now(), inputtxt:text, isCompleted:false, isEdit:false}; 
         // console.log(newTask,'newTask');
          settasks([...tasks,newTask]); 
         // console.log(tasks,'tasks');
          settext('');
         // console.log(refText.current.target); 
          refText.current.focus(); 
          //console.log(tasks, 'after added'); 
    }

    function handleDelete({item}){
      //  console.log(item.id);

       settasks(tasks.filter((i)=>i.id !== item.id))
        
        // console.log(tasks, 'after deleted');
    }

    function handleCheckbox({item}){ 
        const prevData = [...tasks];

        settasks(
            prevData.map((pData)=>(pData.id === item.id ? {...pData, isCompleted: !item.isCompleted  }
                : pData
            )) 
        )
    }
  
    function handleEdit({item}){
        const prevData = [...tasks];

        settasks(
            prevData.map((d)=>(d.id===item.id ? {...d, isEdit:!item.isEdit} : d))
        )
    }

    function handleUpdate({item})
    {
        const prevData = [...tasks];

        settasks(
            prevData.map((itemData)=> itemData.id === item.id ? {...itemData, inputtxt:item.inputtxt, isEdit:false} : itemData)
        )
        
    
        console.log(tasks,'updated');
    }

    function handleOnChange(e,{item})
    {
        const prevData = [...tasks];

        settasks(
            prevData.map((itemData)=> itemData.id === item.id ? {...itemData, inputtxt:e.target.value} : itemData)
        )
        console.log(tasks,'updated');
    }
 
    return (
        <div className="wrapper">
            <div className="search">
                <input ref={refText}
                    type="text"
                    name="todotxt"
                    value={text}
                    placeholder="Enter a to do ..." 
                    onChange={(e)=>settext(e.target.value)}
                />
                <p><button onClick={()=>addToDo(text)}>Add To Do</button></p> 
            </div>
            <div className="tasklist">
                {
                    tasks && tasks.length > 0 ?
                    tasks.map((item) =>
                            <div>
                                <input className="checkbox" type="checkbox" value={item.id} onClick={()=>handleCheckbox({item})} />
                                {
                                    item.isEdit ? 
                                    (   <> <input className="inputtxt" name="inputVal" type="text" onChange={(e)=>handleOnChange(e,{item})} defaultValue={item.inputtxt}   />
                                        <button className="update" onClick={()=>handleUpdate({item})}>Update</button></>
                                     )
                                    : ( <><span className={ item.isCompleted ? 'crosslinetext' : 'normallinetext'  }>
                                        {item.inputtxt}</span>
                                        <button className="delete" onClick={()=>handleDelete({item})}>Delete</button>
                                        <button className="update" onClick={()=>handleEdit({item})}>Edit</button>
                                        </>)
                                }
                                 
                            </div>
                        )
                        : <h2 style={{textAlign:'center'}}>No Tasks. Please add a task.</h2>
                }
            </div>
        </div>
    );


}