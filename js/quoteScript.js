
$(document).ready(function(){

	var quote;
	var author;

	function getNewQuote(){
		$.ajax({
			url: 'https://thesimpsonsquoteapi.glitch.me/quotes',//'http://quotes.stormconsultancy.co.uk/random.json',
			dataType: 'json',
			success: function(responseData){
				
				quote = responseData[0]["quote"];
				author = responseData[0]["character"];

				$('#quote').text(quote);
				$("#author").text(" -- "+author); 
			}

		});
	}


	function changeColor(){
		var colors = ["#3b6938", "#cfeff0", "#bbc6ce", "#f6546a", "#088da5", "#003366", "#d0b38e", "#4b3624", "#bb9c8e", "#180B89", "#042E09", "#eed78f", "#ff8e8e", "#008080", "#088da5", "#003366", "#0080c0", "#80c000"];

		var newColor = colors[Math.floor(Math.random() * (colors.length))];
		
		$("#tweetQuote").css("background-color", newColor);
		$("#newQuote").css("background-color", newColor);
		$("#bg-color").css("background-color", newColor);

	}

	function shareQuote(){
		//grab the quote
		var tweetQuote = document.getElementById('quote').textContent;
		var tweetAuthor = document.getElementById('author').textContent;
		window.open(`https://twitter.com/intent/tweet?text=${tweetQuote + tweetAuthor}`);
	}

	//get a random quote
	getNewQuote();
	changeColor();

	$('#newQuote').on('click', function(){
		getNewQuote();
		changeColor();
	});

	//tweet the quote
	$("#tweet").on('click', function(){
		shareQuote();
	});

});
