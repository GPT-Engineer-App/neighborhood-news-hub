import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto"; // Importing modern and clean font

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#4a90e2", // Adding more vibrant colors
    500: "#50e3c2",
    400: "#b8e986",
    300: "#f8e71c",
    200: "#f5a623",
    100: "#d0021b",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);