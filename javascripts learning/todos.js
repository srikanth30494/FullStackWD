// var todos = ["Buy new turtle"];
// var input = prompt("What would you like to do?");

// while(input != "quit"){
// 	if( input === "list"){
// 		console.log(todos);
// 	}
// 	else if (input === "new"){
// 		var newtodo = prompt(" Enter new todo");
// 		todos.push(newtodo);
// 	}
// 	input = prompt("What you would like todo");
// }

function printReverse(array){
	for (var i = array.length-1; i>=0 ; i--) {
		console.log(array[i]);
	}
	
}

// function isUniform(array){
// 	var i=0;
// 	while(if (( array[0] === array[i])=== true){
// 		i++;
// 		console.log("true");
// 	}
// }

function sumArray(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	console.log(sum);
}

function max(array){
	var i=0;
	var max=0;
	for ( var i=0 ; i< array.length; i++){
		if (array[i] > max) {
			max = array[i];
			// temp = array[i];
			//  console.log(temp);
			// 	if( temp > max){
			// 		max= temp;
			// 		console.log(max);
		
			
		}
		
	}
	console.log(" Maximum value in the array is : " +max);

}