function returnValue(value, func){
	return func ? func(value) : value;	
}
function zero(func){
	return returnValue(0,func);
}
function one(func){
	return returnValue(1,func);
}
function two(func){
	return returnValue(2,func);
}
function three(func){
	return returnValue(3,func);
}
function four(func){
	return returnValue(4,func);
}
function five(func){
	debugger;
	return returnValue(5,func);
}
function six(func){
	return returnValue(6,func);
}
function seven(func){
	debugger;
	return returnValue(7,func);
}
function eight(func){
	return returnValue(8,func);
}
function nine(func){
	return returnValue(9,func);
}
function plus(value){
	return function(temp){
		return temp + value; 
	}
}
function minus(value){
	return function(temp){
		return temp - value; 
	}
}
function times(value){
	debugger;
	return function(temp){
		return temp * value; 
	}
}
function dividedBy(value){
	return function(temp){
		return temp / value; 
	}
}
seven(times(five()))
