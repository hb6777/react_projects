import { useState, useEffect } from "react";
import "./styles.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"


export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function fetchImages(getUrl) {
        setLoading(true);

        try {
            const s = getUrl + '?page=' + page + '&limit=' + limit;
            const resp = await fetch(s);
            const data = await resp.json();

            if (data) {
                //  console.log(data);
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            //  console.log(e.message);
            setErrorMsg(e.message);
        }
    }
    console.log(images);

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url])

    if (loading) {
        return (<div>Loading ... Please wait!</div>);
    }

    if (errorMsg !== null) {
        return (<div>Error Occured! {errorMsg}</div>);
    }

    function handleLeft() {
        // console.log(currentImage);  
        setCurrentImage(currentImage === 0 ? images.length : currentImage - 1);
    }

    function handleRight() {
        // console.log(currentImage); 
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }

    return (<div className="img-container">

        <BsArrowLeftCircleFill onClick={handleLeft} className="arrow arrow-left" />

        {
            images && images.length ?
                images.map((imgdata, index) => (
                    <img key={imgdata.id}
                        src={imgdata.download_url}
                        alt={imgdata.download_url}
                        className={currentImage === index ? "current-image" : "current-image hide-image"}
                    />
                ))
                : null
        }

        <BsArrowRightCircleFill onClick={handleRight} className="arrow arrow-right" />

        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => (
                        <button key={index} className={currentImage === index ? "current-indicator" : "current-indicator hide-current-indicator"}
                            onClick={() => setCurrentImage(index)}
                        >
                        </button>
                    ))
                    : null
            }
        </span>
    </div>);
}


