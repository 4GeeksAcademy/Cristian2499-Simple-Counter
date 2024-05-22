import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { element } from "prop-types";

//create your first component
const Home = ({ segundero }) => {
	const stringCounter = `${segundero}`.padStart(6, "0");
	const arregloDeElementos = stringCounter.split("");
	arregloDeElementos.map((elemento) => console.log(elemento));
	return (
		<div className="bigCounter">
			<div className="calendar"><i class="far fa-clock"></i></div>
			<div className="bodySeconds">
				<h1>{arregloDeElementos.map((item, index) => {
					return <span className="seconds" key={item + index}>{item}</span>
				})}</h1>
			</div>
		</div>
	);
};

export default Home;
