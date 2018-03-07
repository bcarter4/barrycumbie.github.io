//my js file

$(document).ready(function() {
	//create loop to "print out" all elements in the DOM
	//1. create my loop structure and figure out length, i.e.,
	//the number of iterations of my loop
	//2. how do I access an element from my page... then ALL elements?
	//3. how do I want to print them? Start on the console...
	var indexItems = document.getElementsByTagName("*");
	for (var i=0, max=indexItems.length; i < max; i++){
		console.log(indexItems[i]);
		console.log(indexItems[i].tagName);
	}

	$("#closeButton").click(function() {
		$("#notification").toggle(500);
	});

	$(".buttons").click(function() {
		$("p").toggle(1000);
	});

	//js hide n' seek demonstration
	
	var elP = document.querySelector('p');
	elP.text = "none";
	

	//console.log('execute before load...?');

	document.onload = doEverything();

	//console.log('loaded and everything is done');

	function doEverything() {

		console.log("...js file successfully loaded...");

		function catchUp() {

			console.log("...catchUp f/n called.");

			document.querySelector('h1').innerHTML = "Everything is done!";

			$('h1').text("Now you're working with power!").addClass('red');
			
			var elDoc = document;
			console.log(elDoc);

		}

		catchUp();

	}

});
