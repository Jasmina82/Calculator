var calculator = (function () {
	'use strict'


	var currentNum = "";
	var storedNum = "";
	var result = "";
	var stringToDisplay = "";
	const display = $('#display');




	$(".operation").on("click", function () {

		//if there is at least one operand and string is less than 12
		if (currentNum && stringToDisplay.length < 12) {


			storedNum = currentNum;
			currentNum = "";
			result = "";
			stringToDisplay += $(this).text();

			display.text(stringToDisplay);

		}


	});

	$(".number").on("click", function () {

		//if first char is not 0 and currentNum is not previous result
		if (currentNum !== "0" && stringToDisplay.length < 13 && !result) {

			currentNum += $(this).text();
			stringToDisplay += $(this).text();
			console.log(stringToDisplay);
			display.text(stringToDisplay);

		}


	});

	$(".dot").on("click", function () {

		//if currentNum is not empty string,does not have dot already,is not result of previous operation
		if (currentNum && !currentNum.includes(".") && stringToDisplay.length < 12 && !result) {

			currentNum += $(this).text();
			stringToDisplay += $(this).text();
			console.log(stringToDisplay);
			display.text(stringToDisplay);

		}

	});


	$(".equal").on("click", function () {

		//if the last character in the string is number
		if (currentNum) {

			currentNum = eval(stringToDisplay) + "";
			result = currentNum;
			stringToDisplay = currentNum;
			display.text(stringToDisplay);

		}

	});


	$(".clear").on("click", function () {

		if (stringToDisplay.length > 1) {

			let num = currentNum;
			currentNum = num.slice(0, num.length - 1);

			let displ = stringToDisplay;
			stringToDisplay = displ.slice(0, displ.length - 1);
			display.text(stringToDisplay);

		}
		else{
			currentNum="";
			result="";
			stringToDisplay="";
			display.text(stringToDisplay);
		}

	});



})();
