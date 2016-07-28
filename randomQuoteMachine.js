var data = {};


$(document).ready(function(){
  getJSONAndLoadQuote();
});

// works
function getJSONAndLoadQuote(){
  $.getJSON("quotes.json", function(quotes){
    data = quotes;
    return loadQuote();
  });
}

// works
function loadQuote(){

  var randomQuoteIndex = Math.floor(Math.random() * (data.length));
  var randomQuote = data[randomQuoteIndex];

  var quote = randomQuote.Quote;
  var author = randomQuote.Author;

  var quoteText = document.getElementById("quoteText");
  var authorText = document.getElementById("authorText");

  quoteText.innerHTML = quote;
  authorText.innerHTML = author;

  return;

}
