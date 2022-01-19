import React, { useState } from "react";
import { Box, IconButton, Card, CardMedia, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, Link } from "@mui/icons-material";

const GalleryCard = ({ image, toggleLikeStatus }) => {
  const [copyLinkClicked, setCopyLinkClicked] = useState(false);

  const LikeButton = image.liked ? <Favorite /> : <FavoriteBorder />;

  return (
    <Card variant="elevation" sx={{ display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={image.url}
        alt={`Image of ${image.title}`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }} px={2}>
        <Box mt={2}>
          <Typography variant="h2">{image.title}</Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="subtitle">{image.date}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          mt={2}
        >
          <IconButton
            variant="outlined"
            onClick={() => toggleLikeStatus(image)}
            color="secondary"
          >
            {LikeButton}
          </IconButton>
          <IconButton
            variant="outlined"
            onClick={() => {
              navigator.clipboard.writeText(image.url);
              setCopyLinkClicked(true);
              setTimeout(() => setCopyLinkClicked(false), 2000);
            }}
          >
            <Link />
          </IconButton>
          {copyLinkClicked && (
            <Typography color="secondary.dark">Link Copied!</Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default GalleryCard;
