import React, { useState } from "react";
import { Box } from "@mui/material";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  return (
    <Box sx={{ marginBottom: "10px", border: "1px solid black" }}>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Counter: {count}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          sx={{ margin: "10px" }}
          startIcon={<RemoveCircleIcon />}
          onClick={handleDecrement}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ margin: "10px" }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ margin: "10px" }}
          startIcon={<AddCircleIcon />}
          onClick={handleIncrement}
        >
          Increment
        </Button>
      </Box>
    </Box>
  );
}

export default Counter;
