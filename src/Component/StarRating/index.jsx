import { useState } from "react";
import "./styles.css"
import { FaStar } from "react-icons/fa";


export default function StarRating({ starNum = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getId) {
       // console.log(getId);
        setRating(getId);
    }
    function handleOver(getId) {
       // console.log(getId);
         setHover(getId)
    }
    function handleLeave() {
      //  console.log(rating);
        setHover(rating)
    }

    return (<div className="star-rating">  
        {
            [...Array(starNum)].map((_, index) => {
                index += 1 
              return (<FaStar
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleOver(index)}
                        onMouseLeave={() => handleLeave()}
                        size={40}
                    />);   
            })
        }
    </div>); 
}






