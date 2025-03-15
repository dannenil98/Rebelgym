import React from "react";
import { Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3D3B40",
        padding: "1rem",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

      }}
    >
      <Typography variant="h4">Rebel</Typography>
      <img src="/assets/d.png" alt="Navbar image" width="40px" />
      <MenuIcon/>
    </Box>
  );
};

export default Navbar;