import React from "react";
import { Box, Container, Grid } from "@mui/material";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import GalleryCard from "./GalleryCard";

const GalleryContainer = ({ images, toggleLikeStatus, queryState }) => {
  let content;

  if (queryState.isError) {
    content = <Error />;
  } else if (queryState.isLoading && !images.length) {
    content = <Loading />;
  } else {
    content = (
      <Grid container spacing={6} alignItems="center">
        {images.map((image) => (
          <Grid item xs={12} sm={4}>
            <GalleryCard image={image} toggleLikeStatus={toggleLikeStatus} />
          </Grid>
        ))}
        ;
      </Grid>
    );
  }

  return (
    <Box mt={4}>
      <Container maxWidth="xl">{content}</Container>
    </Box>
  );
};

export default GalleryContainer;
