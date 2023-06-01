import React from "react";
import "./App.css";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Forms from "./components/Form/Form.jsx";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      className="app"
      sx={{
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
      }}
    >
      <HomeBanner />
      <Forms />
    </Box>
  );
};

export default App;
