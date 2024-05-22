//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundero = 1
setInterval(() => {
ReactDOM.render(<Home segundero={segundero}/>, document.querySelector("#app"));
segundero += 1
},1000);


