import React from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import Offcanvas from "./Offcanvas";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* OffCanvas */}
      <Offcanvas />
      <Main />
    </>
  );
}
