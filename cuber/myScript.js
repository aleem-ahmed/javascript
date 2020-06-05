function getCube() {
	// Get the value in the element with the id "number"
	let number = document.getElementById("inputId").value

	// Arithmatic
	number = Math.pow(number, 3)

	// Output Out to Console
	console.log('RETURN:', number)

	// Put into HTML
	document.getElementById("output").innerHTML = number
}