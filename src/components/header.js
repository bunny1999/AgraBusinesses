import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const isScrolling = () => {    
    window.addEventListener("scroll", (event) => {
      let posY = window.scrollY
      if (posY >= (window.innerHeight/2)) {
        setIsScrolled(true);
      }
      if(posY <= (window.innerHeight/2)){
        setIsScrolled(false);
      }
  });
  
  };

  //TODO: DNA BRAND REDIRECT
  return (
    <Navbar className={`fixed-top ${isScrolled?'primary-bg':'bg-transparent'}`}>
      {isScrolling()}
      {isScrolled ? (
        <NavbarBrand className="primary-text font-weight-bold">DNA</NavbarBrand>
      ) : (
        <NavbarBrand></NavbarBrand>
      )}
      <Button
        className="rounded-pill"
        className="secoundary-bg secoundary-text"
      >
        My Card
      </Button>
    </Navbar>
  );
}
