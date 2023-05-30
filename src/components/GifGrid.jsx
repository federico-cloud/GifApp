import { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { getGifs } from "../helpers/getGifs";
import { Box, CircularProgress } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);    
  const [isLoading, setIsLoading] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  const getImages = async (category) => {
    const images = await getGifs(category);
    setIsLoading(false);
    setImages(images);
  }

  useEffect(() => {
    if (!isClosed) {
      getImages(category);
    }
  }, [category, isClosed])

  const handleClose = () => {
    setIsClosed(true);
  }

  return (
    <>
      {!isClosed && (
        <div className="center">
          <h3>{category}</h3>
          <CloseIcon className="close" fontSize="large" onClick={handleClose} />
        </div>
      )}
      {!isClosed && (
        <div>
          {isLoading ? (
            <Box 
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <CircularProgress size={80} thickness={5} />
            </Box>
          ) : images.length === 0 ? (
            <p className="error-card">Images weren't found for the category {category}.</p>
          ) : (
            <div className="card-grid">
              {images.map(({ id, title, url }) => (
                <GridItem key={id} title={title} url={url} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}