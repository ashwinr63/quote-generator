const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


// APi quotes global Variables
let apiQuotes = []

// new Quote Function
function newQuote() {

    // Picking a new Random Quote from Api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    
    // Check if Author is blank and replace it with "Unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }

    // check quote length to mention the style of the code. 
    if (quote.text.length > 45) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote')
    }

    quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'

    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        // console.log(apiQuotes[14])
    newQuote();
    }
    catch (error) {
        //catch Error Exception here
    }
}

// Twitter Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// EventListeners 

//newQuote Listener
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

   //on Load function
   getQuotes();