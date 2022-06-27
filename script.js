// APi quotes global Variables
let apiQuotes = []

// new Quote Function
function newQuote() {

    // Picking a new Random Quote from Api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
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

   //on Load function
   getQuotes();