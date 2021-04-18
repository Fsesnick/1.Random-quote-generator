/******************************************
FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: `It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.`,
    source: `Albus Dumbledore`,
    citation: `The Sorcerer's Stone`,
    year: `1991`
  },
  {
    quote: `The happiness of your life depends upon the quality of your thoughts.`,
    source: `Marcus Aurelius`,
    citation: `Meditations`,
    year: `161` 
  },
  {
    quote: `Change your life today. Don’t gamble on the future, act now, without delay.`,
    source: `Simone de Beauvoir`,
    citation: `The Second Sex`,
    year: `1949`
  },
  {
    quote:`Danger is what makes life precious. Death is the constant danger of life.`,
    source: ` Clarice Lispector`,
    citation:`A Breath of Life`,
    year:`2012`
  },
  {
    quote: `As women, we have to start appreciating our own worth and each other’s Worth `,
    source:`Madonna`,
    citation :`Woman of The Year Speech | Billboard Women in Music`,
    year: `2016`
  }
];

/***
 * `getRandomQuote` function
 * generates a random number 
 * between zero and the last index in the `quotes` array
 * ans use this random number
 * to grab a random quote from the array
 ***/
function getRandomQuote() {

  const randomNumber = Math.ceil (Math.random() * quotes.length -1 );

  let randomQuote = quotes[randomNumber]

  // Return the random quote object
  return randomQuote;
}

/***
 * `printQuote` function
 * calls the getRandomQuote()
 * initiates the elements for the HTML
 * element is the complete HTML 
***/
function printQuote(){

  let quotes = getRandomQuote();
  let element ='<p class="quote">' + quotes.quote + '</p>';
  element +=  '<p class="source">' + quotes.source;

if (quotes.citation) {
  element += '<span class="citation">' + quotes.citation + '</span>';
}
if(quotes.year){
  element += `<span class='year'>${quotes.year}</span>`;
}

element += `</p>`;

document.getElementById('quote-box').innerHTML = element; 


}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
