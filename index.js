function writeCards(arr, holiday) {
	let thanks = [];
	for (let i = 0; i < arr.length; i++) {
		thanks.push(`Thank you, ${arr[i]}, for the wonderful ${holiday} gift!`);
	}
	return thanks;
}

function countDown(x) {
	let int = x;
	while (int >= 0) {
		console.log(int--);
	}
}
