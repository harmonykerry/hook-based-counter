import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "#39375B",
        padding: "20px",
        textAlign: "center",
        color: "#ffff",
        marginBottom: "10px",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        React Counter
      </Typography>

      <Typography variant="subtitle" component="h1" gutterBottom>
        Please use the button to interact with your counter
      </Typography>
    </Box>
  );
}

export default Banner;
