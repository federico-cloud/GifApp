import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  const getImages = async(category) => {
    const images = await getGifs(category);
    setImages(images);
  }

  useEffect(() => {
    getImages(category);
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({id, title}) => <li key={id}>{title}</li>)}
      </ol>
    </>
  )
}