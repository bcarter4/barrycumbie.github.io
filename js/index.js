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
});
