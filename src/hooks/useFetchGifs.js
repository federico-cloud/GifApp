import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async (category) => {
        const images = await getGifs(category);
        setIsLoading(false);
        setImages(images);
    }

    useEffect(() => {
        getImages(category);
    }, [category])
    

    return {
        images,
        isLoading
    }
}