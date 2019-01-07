function getMiddle(word){
	let middelIndex = word.length / 2;
	return word.length % 2 ? word.substr(middelIndex, 1) : word.substr(middelIndex - 1, 2);
}