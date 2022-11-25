// Render Prop
import { CssBaseline, Paper } from "@mui/material";

import React from "react";
import Navbar from "./components/navbar";
import RouterConfig from "./components/routes/routerConfig";
import "./style.css";
import Netflix from "./assets/netflix.jpg";

const App = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Netflix})`,
    },
  };
  return (
    
    <Paper
      sx={{
        objectFit: "cover ",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
      style={styles.paperContainer}
      >
      
      <CssBaseline />
      <Navbar />
      <RouterConfig />
      
     
    </Paper>
  );
};

export default App;
