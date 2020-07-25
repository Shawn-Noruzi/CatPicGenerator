import React from "react";
import { NavBar } from "./components/NavBar";
import { CatPictures } from "./components/CatPictures";
import Container from "@material-ui/core/Container";
import "./App.css";

function App() {
  return (
    <Container disableGutters="false" maxWidth="false">
      <NavBar />
      <CatPictures />
    </Container>
  );
}

export default App;
