import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import EspecialButton from "./EspecialButton.jsx";

//create your first component
const Home = () => {
	function fetchingImages(){
		console.log("Load them!");
		fetch("https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw").then( (response) => {
			if(response.ok){ 
				console.log("Images Loaded!!");
			} else {
				console.log("Uh-oh something went wrong");
			}
		});
	}
	function userIsWaiting(){
		console.log("I don't like waiting");
	}
	fetchingImages();
	userIsWaiting();

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!  </h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
