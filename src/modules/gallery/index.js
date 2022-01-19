import React, { useEffect, useState } from "react";
import axios from "axios";

import GalleryContainer from "./GalleryContainer";

const Gallery = () => {
  const [queryState, setQueryState] = useState({
    isLoading: false,
    isError: false,
  });
  const [imageData, setImageData] = useState([]);

  /**
   *
   * @param {*} images array of image data from NASA
   */
  const setInitImageData = (images) => {
    const data = images.map((image) => ({ ...image, liked: false }));
    setImageData(data);
  };

  const toggleLikeStatus = (imageToToggle) => {
    const data = imageData.map((image) => {
      return {
        ...image,
        liked: image.url === imageToToggle.url ? !image.liked : image.liked,
      };
    });
    setImageData(data);
  };

  useEffect(() => {
    console.log(process.env);
    setQueryState({ isLoading: true, isError: false });
    axios
      .get(`https://api.nasa.gov/planetary/apod`, {
        params: {
          count: 12,
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setInitImageData(data);
        } else {
          setInitImageData([data]);
        }

        setQueryState({ isLoading: false, isError: false });
      })
      .catch((err) => {
        setQueryState({ isLoading: false, isError: true });
      });
  }, []);

  return (
    <GalleryContainer
      images={imageData}
      toggleLikeStatus={toggleLikeStatus}
      queryState={queryState}
    />
  );
};

export default Gallery;
