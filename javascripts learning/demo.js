// var firstName = prompt("What is your First Name");
// var lastName = prompt(" Your last Name");
// var age = prompt("your age");
// alert(" Your full name is " +firstName +" "+lastName);
// alert("your age is "+age);
// console.log("Your full name is " +firstName +" "+lastName);
// console.log("You are "+age +" years old");

// var age=prompt(" What is your age?");
// var daysAlive = age*365;
// alert("The days you lived are "+daysAlive);

// var age=prompt(" What is your age?");
// age= Number(age);
// if (age<0) {
// 	console.log("Hey you are not even born, go to womb now");
// }
// else if(age===21) {
// 	console.log("Happy 21st Birthday");
// }
// else if(age%2 !== 0) {
// 	console.log(" Your age is ODD");
// }
// else 
// 	for (var i = 1; i <= age; i++) {
// 		if (age==i*i) {
// 			console.log("Your age is a perfect square");
// 		}
// 	}


var n = -10;
console.log(" Print all numbers between -10 and 19");
while(n<= 19){
	console.log(n);
	n++;
}

var n = 10;
console.log("Print all even numbers between 10 and 40");
while(n<=40){
	if(n%2 === 0){
		console.log(n)
	}
	n++;
}

var n = 300;
console.log("Print all ODD numbers between 300 and 333");
while(n<=333){
	if(n%2 !== 0){
		console.log(n)
	}
	n++;
}

var n = 5;
console.log("Print all numbers divisible by 5 and 3 between 5 and 50")
while(n<=50){
	if (n%5 ===0) {
		if (n%3===0) {
			console.log(n)
		}

	}
	n++;
}
