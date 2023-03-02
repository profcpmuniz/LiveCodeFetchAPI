import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import EspecialButton from "./EspecialButton.jsx";

//create your first component
const Home = () => {
	
	function runFirst(someFunction){
		console.log("I want to run first");
		someFunction();
		runSecond();
		console.log("I also want to run when runFirst runs");
	}
	function runSecond(){
		console.log("Where am I running?");
	}
	runFirst(aThirdOne);
	
	function aThirdOne(){
		console.log("this is crazy");
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo! <EspecialButton title="Click Me!!!" handleSomething={runSecond}></EspecialButton>  <EspecialButton title="Another" handleSomething={aThirdOne}></EspecialButton> <EspecialButton title="Same Button" handleSomething={runSecond}></EspecialButton> </h1>
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
