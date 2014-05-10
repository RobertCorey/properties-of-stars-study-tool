//Generates a popup window with questions, answers and steps
//@name the name of the div that will generate the popup when clicked
//@questions An array of string that represent questions
//@answers An array parallel to questions where answer[n] is the answer to question[n]
//@steps A 2D dimensional array, 
//steps[n] is a step, steps[n][0] is the title of the step and steps[n][1..n] are sub steps
//@prereqs is a list of all the bubble that have to be completed before this bubble is displayed
function generatePopup (name,questions,answers,steps) {
	//create background
	var element = document.createElement('div');
	element.className = "popup";
	element.id = "popup";
	//left side
	var leftSide = document.createElement('div');
	leftSide.className = "popupContent"; 
	//Questions
	leftSide.appendChild(generateQuestions(questions));
	//Submit Button
	var answerButton = document.createElement('button');
	var answerButtonID = name + "ValidateAnswers";
	answerButton.id = answerButtonID;
	answerButton.className = "btn btn-success";
	answerButton.innerHTML = "Check Answers";
	leftSide.appendChild(answerButton);
	//Steps Button
	var stepsButton = document.createElement('button');
	var stepsID = name + "ShowSteps";
	stepsButton.id = stepsID;
	stepsButton.className = "btn btn-info";
	stepsButton.innerHTML = "Show Steps";
	leftSide.appendChild(stepsButton);
	//insert left side into the element
	element.appendChild(leftSide);
	//insert into the document
	document.getElementById("container").appendChild(element);
	//add exit button
	generateExitButton();
	//add listener to steps button
	document.getElementById(stepsID).addEventListener("click",
		function(){ generateSteps(steps) }, false);
	//Add listener to submit button
	document.getElementById(answerButtonID).addEventListener("click",
		function(){ validateAnswers(name,answers,questions) }, false);
	return true;
}
function generateExitButton(){
	var exitButton = document.createElement('span');
	exitButton.id = 'exitButton';
	exitButton.className = 'glyphicon glyphicon-remove';
	exitButton.addEventListener("click",exitPopup,false);
	document.getElementById('popup').appendChild(exitButton);
}
function exitPopup(){
	var element = document.getElementById('popup');
	element.parentNode.removeChild(element);
}
function generateQuestions (questions){
	var element = document.createElement('div');
	for (var i = 0; i < questions.length; i++) {
		//create the question text 
		var questionText = document.createElement('span');
		questionText.className = "popupQuestion";
		questionText.innerHTML = questions[i];
		//create input
		var id = "question".concat(i);
		element.appendChild(questionText);
		var questionInput = document.createElement('input');
		questionInput.className = "popupQuestion";
		questionInput.id = id;
		element.appendChild(questionInput);
		//span for validation
		var id = "validate".concat(i);
		var questionValidate = document.createElement('span');
		questionValidate.id = id;
		element.appendChild(questionValidate);
	}
	return element;
}
function generateSteps (steps){
	var element = document.getElementById('popupSteps');
	if (element) {
		element.parentNode.removeChild(element);
	}
	else{
		//initialize the container that will hold the steps
		var stepsElement = document.createElement('div');
		stepsElement.className = "popupSteps";
		stepsElement.id = "popupSteps";
		//Format the steps with html tags
		for (var i = 0; i < steps.length; i++) {
			var header = document.createElement('span');
			header.className = "h3";
			var list = document.createElement("ol");
			for (var j = 0; j < steps[i].length; j++) {
				if (j === 0) {
					header.innerHTML = steps[i][j];
				}
				else{
					var listElement = document.createElement("li");
					listElement.innerHTML = steps[i][j];
					list.appendChild(listElement);
				}
			}
			stepsElement.appendChild(header);
			stepsElement.appendChild(list);
		}
		var target = document.getElementById("popup");
		target.appendChild(stepsElement);
	}
}
function validateAnswers (parent,answers,questions){
	var pass = true;
	for (var i = 0; i < answers.length; i++) {
		var key = "question".concat(i);
		var userAnswer = document.getElementById(key).value;
		key = "validate".concat(i);
		var validateElemement = document.getElementById(key);
		if (answers[i] === userAnswer) {
			validateElemement.className = "glyphicon glyphicon-ok solved";
		}else{
			validateElemement.className = "glyphicon glyphicon-remove closed";
			pass = false;
		}
	}
	if (pass) {
		var parentElement = document.getElementById(parent);
		var updatedClassString = parentElement.className.replace("open","solved");
		parentElement.className = updatedClassString;
		var newAnswers = document.createElement("ul");
		newAnswers.className = "h6";
		for (var i = 0; i < questions.length; i++) {
			var listElement = document.createElement("li");
			listElement.innerHTML = questions[i].concat(" ").concat(answers[i]);
			newAnswers.appendChild(listElement);
		}
		parentElement.appendChild(newAnswers); 
	}
}
window.onload = function(){
	/*Find the distance */
	var questions = ["What is the distance in parsecs?","What is the distance in light years?"];
	var answers = ["5.8","18.9"];
	var steps = [
		["Find the distance in Parsecs",
		"Use the formula: Star\'s distance (in parsecs) = 1 / parallax",
		"e.g parallax = .742, 1 / .742 ~= 1.35, Star\'s distance = 1.35 parsecs"],
		["Find the distance in light years",
		"The ratio of parsecs to light years is 3.25 parsecs = 1 light year",
		"e.g 3.25 * 1.35 ~= 4.39"]
	];
	var temperatureQuestions = ["What is the temperature of the star in kelvin?"];
	var temperatureAnswers = ["10381.6"];
	var temperatureSteps = [
		["Use Wein\'s Law of Radiation","λ<sub>max</sub> = 0.3cm / T","Where T is the temperature in kelvin"],
		["Solve the formula for T","Divide both sides by λ<sub>max</sub>","Multiply both sides by T","Result: T = .3 / λ<sub>max</sub>"],
		[
			"Perform unit conversions",
			"1 nanometer <em>nm</em> is equal to 1 * 10<sup>-7</sup> centimers <em>cm</em>",
			"e.g 289nm * (1 * 10<sup>-7</sup>) = 0.0000289"
		],
		["Insert the values and solve","e.g λ<sub>max</sub> = 0.0000289 nm","T = .3 / 0.0000289","T ~= 10381.6"]
	];
	var absMagQuestions = ["What is the Absolute Magnitude of the Star?"];
	var absMagAnswers = ["5.9"];
	var absMagSteps = [
		["Use the distance modulus","m - M = 5 * log(distance in parsecs / 10)"],
		["Solve the formula for M","Add M to both sides",
		"Subtract 5 * log(distance in parsecs / 10) from both sides",
		"Result: M = m - 5 * log(distance in parsecs / 10)"
		],
		[
			"Example distance in parsecs = 5.8; Apparent Magnitude (m) = 4.7",
			"M = 4.7 - 5 * log(5.8/10)",
			"M ~= 5.9"
		]
	];
	var totalPowerQuestions = ["In the form a * 10<sup>b</sup> what is a?","What is b?"];
	var totalPowerAnswers = ["1.5","26"];
	var totalPowerSteps = [
	["Find the power of the star relative to the sun",
	"(2.5^(M of Sun - M of Star)",
	"e.g 2.5^(4.83 - 5.9) = 0.38 times as bright"],
	["Multiply that relation by the actual power of the sun",
	"e.g 0.38 * 4 * 10<sup>26</sup> Watts","Power of Star ~= 1.5 * 10<sup>26</sup> Watts"]
	];
	var ppmQuestions = ["In the form a * 10<sup>b</sup> what is a?","What is b?",];
	var ppmAnswers = ["6.6","8"];
	var ppmSteps = [
		["Use the Stefan Boltzman Radiation law",
		"Power per meter ^ 2 = σT^4",
		"σ = 5.7 * 10<sup>-8</sup>",
		"T = temperature of star in kelvin"],
		["Enter the values",
		"T = 10381.6",
		"(5.7 * 10<sup>-8</sup>)(10381.6)<sup>4</sup>",
		"P<sub>m<sup>2</sup></sub> = 6.6 * 10<sup>8</sup> Watts / meter squared"]
	];
	var areaQuestions = ["In the form a * 10<sup>b</sup> what is a?","What is b?",];
	var areaAnswers = ["2.8","17"];
	var areaSteps = [
	["Use the total Power and Power per meter squared values",
	"Area in meters squared = Total Power / Power per meter squared"],
	[
		"Example",
		"P<sub>total</sub> = 1.5 * 10^26",
		"P<sub>m<sup>2</sup></sub> = 6.6 * 10^8",
		"1.5 * 10^ 26 / 6.6 * 10^8 ~= 2.8 * 10^17",
		"Area of the Star = 2.8 * 10^17 square meters"
	]
	]
	document.getElementById('temperature').addEventListener(
			"click",
			function(){ generatePopup("temperature",temperatureQuestions,temperatureAnswers,temperatureSteps) },
			false);
	document.getElementById('distance').addEventListener(
		"click",
		function(){ generatePopup("distance",questions,answers,steps) },
		false);
	document.getElementById('absMag').addEventListener(
		"click",
		function(){ generatePopup("absMag",absMagQuestions,absMagAnswers,absMagSteps) },
		false);
	document.getElementById('totalPower').addEventListener(
		"click",
		function(){ generatePopup("totalPower",totalPowerQuestions,totalPowerAnswers,totalPowerSteps) },
		false);
	document.getElementById('powerPerMeter').addEventListener(
		"click",
		function(){ generatePopup("powerPerMeter",ppmQuestions,ppmAnswers,ppmSteps) },
		false);
	document.getElementById('area').addEventListener(
		"click",
		function(){ generatePopup("area",areaQuestions,areaAnswers,areaSteps) },
		false);
}