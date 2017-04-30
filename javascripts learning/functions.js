function isEven(n) {
	if (n%2===0) {
		return true;
	}
	else return false;
	
}

function factorial(n) {
	if(n===0){
		return 1;
	}
	else
	{
		var temp=1;
		for (var i = 1; i <=n; i++) {
		temp= temp*i;
	}
	return temp;
}
}

function kebabToSnake(str){
	x = str.replace(/-/, "_"); 
	return x;
}
