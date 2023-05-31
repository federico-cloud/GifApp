import { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { Box, CircularProgress } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  const [isClosed, setIsClosed] = useState(false);
  
  const handleClose = (event) => {
    event.target.parentNode.remove();
    setIsClosed(true);
  }

  return (
    <>
      {!isClosed && (
        <div>
          <div className="center">
            <h3>{category}</h3>
            <CloseIcon className="close" fontSize="large" onClick={handleClose} />
          </div>
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
  
  
  
  
  
  
  
  
  