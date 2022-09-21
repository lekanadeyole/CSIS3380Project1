

//Array containing quotes, sources, year and citation is created

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela",
        year: 1989,
        citation: "ACP Political Rally"
    },

    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        source: "Eleanor Roosevelt",
        year: 1978
    },

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        source: "James Cameron",
        year: 2001
    },

    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        source: "Oprah Winfrey",
        citation: "The Oprah Winfrey Show"
    },

    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source: "Steve Jobs",
    }
];



/***
 * `getRandomQuote` function
***/

//getRandomQuote function which randomizes the quotes to be displayed

function getRandomQuote(quotes){

    let num, noOfQuotes;

    noOfQuotes = quotes.length;

    num = Math.floor((Math.random() * noOfQuotes));

    return num;
}



//printquote function which creates the quote strings and contacenates relevant year and citation where applicable
function printQuote(){

    //retrieving a random quote
    let quoteNum = getRandomQuote(quotes);
    let lastQuote = quoteNum;

    
    document.getElementById('quote').innerHTML = quotes[quoteNum].quote;
    document.getElementById("source").innerHTML = quotes[quoteNum].source;

    if(quotes[quoteNum].citation != null){

        document.getElementById("source").innerHTML += ",  "+ quotes[quoteNum].citation;

    } else{
        document.getElementById("source").innerHTML += ",  ";
    }

    if(quotes[quoteNum].year != null){

        document.getElementById("source").innerHTML += ",  "+ quotes[quoteNum].year;

    }else{
        document.getElementById("source").innerHTML += ",  ";
    }
  
    


}



//Event listener to call the printquote function when the button is clicked
document.getElementById('load-quote').addEventListener('click', printQuote);