const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const newQuoteButton = document.querySelector('.new-quote');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quote.textContent = randomQuote.quote;
  author.textContent = '- ' + randomQuote.author;
}

newQuoteButton.addEventListener('click', displayQuote);

displayQuote();
