function boot() {
	var rm = new RiMarkov(randNum);
	var text = text1.concat(text2);
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
}