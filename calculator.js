var calculator=(function(){
	'use strict'
	
	
var currentNum="";
var storedNum="";
var result=0;
var arrayOfNumbersAndOperations=[];	
var stringToDisplay="";
	
const display=document.getElementById('display');
const elementDiv=document.getElementById('calculator');

	
    elementDiv.addEventListener('click',(event)=>{
	
	const button=event.target;
		
		
	const operatorButton = button.getAttribute('data-operation');
    const clearButton = button.getAttribute('data-clear');
    const equalButton = button.getAttribute('data-equal');
	const numberButton=button.getAttribute('data-number');
		
		

		 function displayInputs (){
		
				 if(stringToDisplay!=="")
				 display.innerHTML=stringToDisplay;
		
	     }
		 function createNumber(getNumber){
		
		  //check the lenght of inserted numbers and operators
		if( stringToDisplay.length<=10){
			
			//do not let user to enter number on result from previous operation
			if(result===0){
	
	        currentNum+=getNumber;
			stringToDisplay+=getNumber;
		    display.innerHTML=stringToDisplay;
		
	       }}
	  } 
		
		if(clearButton){
			
		    arrayOfNumbersAndOperations=[];
			currentNum="";
			result=0;
			stringToDisplay="";
			display.innerHTML=result;
			
		}
		
		else if (equalButton){
			
			try{
				
				result=eval(stringToDisplay);
				currentNum=result.toString();	
				
			}
			catch(err){
				
				currentNum="";
				display.innerHTML="error";
			}
	
		 
			 stringToDisplay=currentNum;
			
			 //set maximum number to display to 10
			 if (stringToDisplay.length>10){
				
				 stringToDisplay=stringToDisplay.slice(0,10);
				 
			 }
			
			 
		    arrayOfNumbersAndOperations=[];
			displayInputs ();
		    
	        } 
		
		
		//if pressed button holds operator
		else if(operatorButton){
			
			if(currentNum!==""){
				
				storedNum=parseFloat(currentNum);
				arrayOfNumbersAndOperations.push(storedNum);
				
				//after adding number to array,reset values
				currentNum="";	
				result=0;
				
				
				function addOperator(operator){
			arrayOfNumbersAndOperations.push(operator);
					stringToDisplay+=operator;
			
				};
				
				
		const operations={
			
		plus :()=>{
	
			addOperator("+");
	        },
		  minus :()=>{
			
				addOperator("-");
		    },
			  divide:()=>{
	
				addOperator("/");
            },
		   multiply:()=>{
			   
				addOperator("*");	   	
		   }
	        }
	
		//call corresponding operation
			if( stringToDisplay.length<10)
		operations[operatorButton]();
				
		displayInputs();
		
		};
				
		       }	
		
		//if pressed button holds a number
		else if(numberButton){
			
			
			//do not let user to input number with zero on first place
			if(currentNum==="0" && numberButton!=="."){
				currentNum="";
				stringToDisplay=stringToDisplay.slice(0,-1);
	
			}
			
			createNumber(numberButton);
			
               }
		
		  });

	})();

