//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "/workspace/react-hello/src/js/component/card.jsx;
import Xscard from "src/js/component/xscard.jsx";
import Navbar from "src/js/component/navbar.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
