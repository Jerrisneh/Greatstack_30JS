
const quote = document.getElementById("quote");
const author = document.getElementById("author");
let QuoteBtn = document.getElementById("quote-btn");
let tweetBtn = document.getElementById("tweet-btn");

const apiUrl  = "https://api.quotable.io/random";

async function getQoute(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQoute(apiUrl);

QuoteBtn.addEventListener("click", function(){
    getQoute(apiUrl);
});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Tweet Window", "width=600 height=300");
}

tweetBtn.addEventListener("click", function(){
    tweet();
});
