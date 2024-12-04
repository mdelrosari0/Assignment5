// makes the text bigger
function biggerText() {
	alert("Hello, world!");
	
	// increase font size
	document.getElementById("text-area").style.fontSize = "24pt";
}

// change style based on radio button
function changeStyle() {
	alert("style changed!");
	let textArea = document.getElementById("text-area");
	let fancyRadio = document.getElementById("fancy-radio");

	if (fancyRadio.checked) {
		// fancy styles
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		// normal styles
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// add "moo"
function makeMoo() {
	let textArea = document.getElementById("text-area");
	// split the text by periods
	let sentences = textArea.value.split(".");
	
	// for each "sentence", trim whitespace and add "-Moo"
	for (let i = 0; i < sentences.length - 1; i++) {
		sentences[i] = sentences[i].trim() + "-Moo";
	}
	
	// recombine new sentences with spaces
	textArea.value = sentences.join(". ");
	// make everything uppercase
	textArea.value = textArea.value.toUpperCase();
}
