function div(x, y) {
	let family = "asadi";
	return (x / y);
}
{
	var firstName = "ali";
	let family = "asadi";
	{
		var firstName = "ali33";
		let family = "asadi3334";
		console.log(firstName); //ali33 
		console.log(family); // asadi3334
	}
	console.log(family);//asadi
	console.log(firstName);//ali33
	{
		var firstName = "reza44";
	}
	console.log(firstName);//reza44

}
