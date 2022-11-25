import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AppleIcon from "@mui/icons-material/Apple";

import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClickProducts = () => {
    navigate("/products");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#032541" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppleIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            APPLE
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button
              key={""}
              onClick={handleClickProducts}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              PAYEMENT
            </Button>
            <Button
              key={""}
              onClick={handleClickLogin}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              LOGIN
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="just click!">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="w" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
