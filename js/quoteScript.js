
$(document).ready(function(){

				var quote = document.getElementById('quote');
				var author = document.getElementById('author');
				var tweetQuote = document.getElementById('tweetQuote');

				tweet.addEventListener("click", function(){
					pushTweet();
				});

				function pushTweet(){
					//grab tweet text
					var myTweet = quote.textContent;
					var by = author.textContent;
					//Set new href to include myTweet
					tweet.href = `https://twitter.com/intent/tweet?text=${myTweet + by}`;
				}


				$("#newQuote").on("click", function(){
					$.getJSON("https://talaikis.com/api/quotes/", function(data){
						for(var i in data){
							var quote = JSON.stringify(data[i]["quote"]);
							var author = JSON.stringify(data[i]["author"]);
							$("#quote").text(quote);
							$("#author").text("-- "+author);

							//$("#author").append("<br>");
						}
					});

					var colors = ["#3b6938", "#cfeff0", "#bbc6ce", "#f6546a", "#088da5", "#003366", "#d0b38e", "#4b3624", "#bb9c8e", "#180B89", "#042E09", "#eed78f", "#ff8e8e", "#008080", "#088da5", "#003366", "#0080c0", "#80c000"];

					var newColor = colors[Math.floor(Math.random() * (colors.length))];
					console.log("Wasted color: ", newColor);

					$("#tweetQuote").css("background-color", newColor);
					$("#newQuote").css("background-color", newColor);
					$("#bg-color").css("background-color", newColor);
					//randomColors();
				});
});
