function boot() {
	// truncate the longer of the two texts into the shorter one's length - BUT ONLY if text isn't empty
	if ((text1!="") && (text2!="")) {
		if (text1.length >= text2.length) {
			text1 = truncate (text1, text2.length);
		}
		else {
			text2 = truncate (text2, text1.length);
		}
	}
	// join the two texts and start RiMarkov
	var text = text1.concat(text2);
	var rm = new RiMarkov(randNum);
	rm.loadText(text);
	sentences = rm.generateSentences(5);
	for (i = 0; i < sentences.length; i++) {
		document.getElementById("result").innerHTML += (sentences[i] + " ");
	}
	$("#progress").fadeOut(500);
	setTimeout(
		function() {
			$("#output").fadeIn(1000);
		}, 500);		
	// truncate function	
	function truncate(str, n){
		return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
	};	
}