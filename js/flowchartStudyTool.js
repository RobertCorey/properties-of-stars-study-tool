function exitPopup(){
	var element = document.getElementById('popup');
	element.parentNode.removeChild(element);
}
function generatePopup (name,questions,answers,steps) {
	//create background
	var element = document.createElement('div');
	element.className = "popup";
	element.id = "popup";
	//exit button
	var exitButton = document.createElement('span');
	exitButton.id = 'exitButton';
	exitButton.className = 'glyphicon glyphicon-remove';
	exitButton.addEventListener("click",exitPopup,false);
	element.appendChild(exitButton);
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
	//add listener to steps button
	document.getElementById(stepsID).addEventListener("click",
		function(){ generateSteps(steps) }, false);
	return true;
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
		//create space 
	}
	return element;
}
function generateSteps (steps){
	var element = document.getElementById('popupSteps');
	if (element) {
		element.parentNode.removeChild(element);
	}
	else{
		var stepsElement = document.createElement('div');
		stepsElement.className = "popupSteps";
		stepsElement.id = "popupSteps";
		stepsElement.innerHTML = steps;
		var target = document.getElementById("popup");
		target.appendChild(stepsElement);
	}
}
function validateAnswers (answers){
	
}
window.onload = function(){
	var questions = ["What is the distance in parsecs?","What is the distance in light years?"];
	var answers = [1.3,4.2];
	var steps = '<span class="h3">Find the distance in Parsecs</span> \
		<ul> \
		  <li>Use the formula: Star\'s distance (in pc) = 1 / parallax</li> \
		  <li> \
		    e.g parallax = .742, 1 / .742 ~= 1.35, Star\'s distance = 1.35 parsecs \
		  </li> \
		</ul> \
		<span class="h3">Find the distance in light years</span> \
		<ul> \
		  <li>The ratio of parsecs to light years is 3.25 parsecs = 1 light year</li> \
		  <li>e.g 3.25 * 1.35 ~= 4.39 </li> \
		</ul>';
	document.getElementById('findDistance').addEventListener(
			"click",
			function(){ generatePopup("distance",questions,answers,steps) },
			false);
}