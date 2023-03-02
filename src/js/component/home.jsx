import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import EspecialButton from "./EspecialButton.jsx";

//create your first component
const Home = () => {
	
	function promise1() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve("I am resolved as 1");
		  }, 100);
		});
	  }
	  function promise2() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve("I am resolved as 2");
		  }, 200);
		});
	  }
	  function promise3() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve("I am resolved as 3");
		  }, 300);
		});
	  }
	  async function handlingAllPromises() {
		var first = await promise1();
		var second = await promise2();
		var third = await promise3();
		
		console.log(first);
		console.log(second);
		console.log(third);
	  }
	  handlingAllPromises();
	  console.log('I can continue run my code even with all this promisse')
	  
	 
	  function promiseRejected() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			reject("I am the Promise Rejected");
		  }, 300);
		});
	  }

	  async function RunRejectPromise() {
		try {
			var first = await promiseRejected();
			console.log(first);
		} catch (error) {
			console.log(error);
		}
		
	  }
	  RunRejectPromisse();

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
