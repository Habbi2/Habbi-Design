import * as React from "react";
import DrawerAppBar from "./Nav";
import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <DrawerAppBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Sobre Nosotros" Component={About} />
          <Route path="/Contacto" Component={Contact} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
