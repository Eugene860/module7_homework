function keyProperty(obj) {
	for (let key in obj) {
		console.log(key);
		if (obj.hasOwnProperty(key)) {
			console.log(obj[key]);
		}
	}
}
keyProperty({a : 1, b : 2, c : 3})