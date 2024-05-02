import { useRef } from "react";

export default function ScrollToSection(){

    const data = [
        {
            label: "Red",
            style: {
                width:'50%',
                height:'600px',
                background:'red' ,
                position:'relative',
                left:'20%',
                margin:'20px'
            }
        },
        {
            label: "Black",
            style: {
                width:'50%',
                height:'600px',
                background:'black',
                position:'relative',
                left:'20%',
                margin:'20px'
            }
        }, 
        {
            label: "Green",
            style: {
                width:'50%',
                height:'600px',
                background:'green',
                position:'relative',
                left:'20%',
                margin:'20px'
            }
        },
        {
            label: "Blue",
            style: {
                width:'50%',
                height:'600px',
                background:'blue',
                position:'relative',
                left:'20%',
                margin:'20px'
            }
        },
        {
            label: "Yellow",
            style: {
                width:'50%',
                height:'600px',
                background:'yellow',
                position:'relative',
                left:'20%',
                margin:'20px'
            }
        }, 
    ];


    const sectionRef = useRef(null);

    function handleToSection(){ 
      //  sectionRef.current.scrollIntoView({behavior:'smooth'});

      let pos = sectionRef.current.getBoundingClientRect().top; 
      window.scrollTo({top:pos,behaviour:'smooth'}); 
    }

    return(
        <div>
            <button onClick={handleToSection}>Scroll to section</button> 
            {
                data.map((item, index)=> ( 
                    <div ref={(index === 4 ? sectionRef  : null)} style={item.style}>
                        {item.label}
                    </div>
                ))                     
            }
        </div>
    );


}




