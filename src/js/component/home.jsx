import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import EspecialButton from "./EspecialButton.jsx";

//create your first component
const Home = () => {
	//defining the Promisse!!!
	var myPromise = new Promise(function(resolve, reject) {
		setTimeout(function() {
		   reject("I was resolved");
		}, 3000);
	  });
	  
	  //using the Promisse!!!
	  myPromise.then((obj) => {
		console.log("My Result: " + obj);
	  }).catch((reason) => console.log("My Error: " + reason));
	  
	  //Printing what is a Promisse
	  console.log(myPromise);
	  console.log("hello!!!");
	  
	  //Function that will return a Promisse
	  function CallingAnotherPromisse(){
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
			  resolve("Resolved using Await");
			}, 300);
		  });
	  }
	  //Creating asyncronous Function!!!
	  async function MyFunction(){
			console.log("Hello");
			let data = await CallingAnotherPromisse();
			console.log("Await Result: " + data);
	  }
	  MyFunction();
	  console.log("Look at this crazy thing!!!");
	  

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
