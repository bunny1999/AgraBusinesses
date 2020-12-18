import React from "react";
import "../App.css";
import { Container } from "reactstrap";

export default function PageNotFound() {
  return (
    <Container
      className="container-flex full-height horz-center vert-center flex-vertical"
    >
      <h1 className="text-danger">404</h1>
      <h3>Page Not Found!</h3>
    </Container>
  );
}
