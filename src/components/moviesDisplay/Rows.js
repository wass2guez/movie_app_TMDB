import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';


export default function Rows({setAlignment , alignment}) {
 
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: selectedColor,
    },
  }));
  

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 8, mb: 3 }}>
      <Typography sx={{ fontFamily: "bold", fontSize: "25px", mr: "22px" }}>
        Populaire
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{
          background: "white",
          borderRadius: "30px",
          height: "30px",
          border: "1px solid black",
          overflow: "hidden",
          color:'#032541',
          font :'16px "Source Sans Pro" , Arial ,sans-serif' ,

       
        }}
      >
        <ToggleButton
          value="top-rated"
          selectedColor="#032541"
          sx={{
            fontWeight: "bold",
            color: "darkgreen"
          }}
        >
          Top Rated
        </ToggleButton>
        <ToggleButton
          value="upcoming"
          selectedColor="#032541"

          sx={{ fontWeight: "bold", color: "darkgreen" }}
        >
          Upcoming
        </ToggleButton>
        <ToggleButton
          value="popular"
          selectedColor="#032541"

          sx={{ fontWeight: "bold", color: "darkgreen" }}
        >
          Popular
        </ToggleButton>
        <ToggleButton
          value="now"
          selectedColor="#032541"

          sx={{ fontWeight: "bold", color: "darkgreen" }}
        >
          Now Playing
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
