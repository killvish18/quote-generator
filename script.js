const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote

function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if the author place is blank and replace with 'unkown'.
    if(!quote.author){
        authorText.textContent = 'Unkown';
    }
    else{
        authorText.textContent = quote.author;
    }

    // check quote length is determine.
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// get quotes for api
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }
    catch (error){
        // check error here.
    }
}

// Tweet Quote.

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();