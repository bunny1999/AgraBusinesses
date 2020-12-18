import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
//TODO: IN MAIN BASE
import { ToastContainer } from "react-toastify";
import App from "./App";
import PageNotFound from "./pages/404_page_not_found";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact component={PageNotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
