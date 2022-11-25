import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/Star';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
const API_KEY = "e5fe08aef5df87b1908d4b27c4e8b7fb";

const Dialogg = ({ open, handleClose,  id }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContainer id={id} />
    </Dialog>
  );
};

const DialogContainer = ({ id }) => {
  const [detail, setDetail] = useState([]);
  const[trailer , setTrailer] = useState([])
  const[clicked , setClicked] = useState(false)

  const handleTrailer = async () => {
    const {data : dataa} = await axios.get (
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
    setTrailer(dataa)
  
  }
  console.log(trailer)
  //console.log(trailer.results.map((el)=> el.key))
  const handleDetail = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    setDetail(data);
    console.log(data)
  };
  const handleClick = ()=> {
 setClicked(true)
  }
  const renderTrailer = ()=> {
    const traile = trailer.results.find(vid => vid.name = 'Official Trailer')
    return (
      <YouTube style={{width : '70vh' , overflow :'hidden'}} videoId={traile.key} />
    )
  }

  useEffect(() => {
    handleDetail();
    handleTrailer()
  }, []);
  // const getTrailer = ()=> {
  // return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US
  // `  
  // }
  
  const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <DialogTitle id="alert-dialog-title">
        <Box sx={{ display: "flex" }}>
          <img
            style={{ height: "100px", width: "75px" }}
            src={getPosterUrl(detail.backdrop_path)}
            alt="aa"
          />
          <Box>
            <Typography sx={{ color: "whitesmoke", ml: "6px" }} variant="h5">
              {detail.title}
            </Typography>{" "}
            <Typography
              sx={{
                color: "#FFFFFFB3",
                ml: "6px",
                mt: "4px",
                font: "14px Roboto Helvetica , Arial ,  sans-serif",
              }}
              variant="h6"
            >
              {detail.release_date}
            </Typography>
            <Stack sx={{ mt: "4px" }} spacing={2} direction="row">
              {detail.genres?.map((el) => (
                <Typography
                  sx={{
                    color: "#FFFFFFB3",
                    ml: "6px",
                    font: "14px Roboto Helvetica , Arial ,  sans-serif",
                  }}
                  variant="h6"
                >
                  .{el.name}
                </Typography>
              ))}
            </Stack>
            <Stack direction='row' >
              <StarBorderIcon container sx={{color: "#FC0"}} />

            <Typography
              sx={{
                color: "#FFFFFFB3",
                ml: "6px",
                mt: "4px",
                font: "14px Roboto Helvetica , Arial ,  sans-serif",
              }}
              variant="h6"
              >
              {Math.round(detail.vote_average * 100)/100} 
            </Typography> 
              </Stack>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{font: "14px Roboto Helvetica , Arial ,  sans-serif" , color:'#FFFF'}} id="alert-dialog-description">
          {detail.overview}
         
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{display : 'flex' , justifyContent :'center'}}>

       {!clicked && <Button onClick={handleClick}sx={{background: '#FFFFFF14' , margin :'0px 8px 0px 0px' , padding :'0px 16px'}}> <YouTubeIcon sx={{color : 'blue'}}/>Voir Bande d'Annonce</Button>}
       {clicked && renderTrailer() }
       
      </DialogActions>
    </Box>
  );
};
export default Dialogg;
