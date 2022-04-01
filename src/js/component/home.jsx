import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [apretar, setApretar] = useState("");
	return (
		<div className="semaforo">
			<div
				onClick={() => setApretar("luz-roja")}
				className={
					"luz-roja " + (apretar === "luz-roja" ? "brillo" : "")
				}></div>
			<div
				onClick={() => setApretar("luz-amarilla")}
				className={
					"luz-amarilla " +
					(apretar === "luz-amarilla" ? "brillo" : "")
				}></div>
			<div onClick={() => setApretar("luz-verde")}
				className={
					"luz-verde " +
					(apretar === "luz-verde" ? "brillo" : "")
				}></div>
		</div>
	);
};

export default Home;
