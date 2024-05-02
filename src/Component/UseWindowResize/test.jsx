import useWindowResizeHook from "./index"

export default function UseWindowResize(){

    const {width , height} = useWindowResizeHook();


    return(
        <div><h1>Window Resize</h1>
            <p>Width:{width} </p>
            <p>Height: {height}</p>
        </div> 
    );
}




