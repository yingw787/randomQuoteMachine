var data = {};
var quoteGlobal = "";
var authorGlobal = "";

$(document).ready(function(){
  getJSONAndLoadQuote();



});

$(document).on('click', "#tweetButton", function(){
  retweetQuote();
})

// works
function getJSONAndLoadQuote(){
  $.getJSON("quotes.json", function(quotes){
    data = quotes;
    return loadQuote();
  });
}

// works
function loadQuote(){

  transitionColors();

  var randomQuoteIndex = Math.floor(Math.random() * (data.length));
  var randomQuote = data[randomQuoteIndex];

  var quote = randomQuote.Quote;
  var author = "-";
  author += randomQuote.Author;

  quoteGlobal = quote;
  authorGlobal = author;

  var quoteText = document.getElementById("quoteText");
  var authorText = document.getElementById("authorText");

  quoteText.innerHTML = quote;
  authorText.innerHTML = author;

  return;

}

function retweetQuote(){

  var tweetString = "";
  tweetString += "https://twitter.com/intent/tweet?text=";
  tweetString += encodeURIComponent(quoteGlobal + " " + authorGlobal + " #randomQuoteMachine");

  window.open(tweetString);
}

function transitionColors(){


  var newColor = '#00FF00';

  $(document.body).animate({backgroundColor: newColor}, 1000);
  $("#authorText").animate({color: newColor}, 1000);
  $("#quoteText").animate({color: newColor}, 1000);
  $("#tweetButton").animate({borderTopColor: newColor, borderLeftColor: newColor, borderRightColor: newColor, borderBottomColor: newColor}, 1000);
  $("#newQuoteButton").animate({borderTopColor: newColor, borderLeftColor: newColor, borderRightColor: newColor, borderBottomColor: newColor}, 1000);

  $("#newQuoteButton").animate({color: newColor}, 1000);
  
}

function getRandomColor(){

}
