const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "By being yourself you put something wonderful in the world that was not there before.",
        author: "Edwin Elliot",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
