import { Box, Typography, IconButton } from "@mui/material";
import { LikeButton } from "@lyket/react";

import { Row } from "reactstrap";
import { useState } from "react";
import Dialogg from "./Dialog";
const getPosterUrl = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
};

const MovieCard = ({ poster_path, name, date , overview , id}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlepress = () => {
    console.log("liked");
  };
  return (
    <Row title="action">
      <IconButton onClick={handleClickOpen} sx={{ '&:hover': {
              scale: "1.05",
           },}}>
        {/* <Dialogg open={open} handleClose={handleClose} /> */}

        <img
          src={getPosterUrl(poster_path)}
          alt={name}
          style={{
            width: "200px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          //   '&:hover': {
          //     scale: "1.5",
          //  },
          }}
        />
      </IconButton>
      <Dialogg open={open} overview={overview} name={name} handleClose={handleClose} id={id} />
      <LikeButton
        onPress={handlepress}
        id="how-to-reduce-footprint"
        namespace="post"
        component={LikeButton.templates.Twitter}
      />
      <Box>
        <Typography
          variant="h6"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2">{date}</Typography>
      </Box>
    </Row>
  );
};
export default MovieCard;
