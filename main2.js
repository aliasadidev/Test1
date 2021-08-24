let calc = function (_x, _y) {
	let x = _x;
	let y = _y;
	this.zarb = function () {
		let z = x * y;
		return z;
	}
	this.taghsim = function () {
		let result = x / y;
		return result;
	}
}