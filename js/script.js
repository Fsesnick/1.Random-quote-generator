/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
console.log('test');
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = Math.ceil (Math.random() * quotes.length -1 );
  console.log(randomNumber);
  
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = quotes[randomNumber]
  console.log(randomQuote);

  // 3. Return the variable storing the random quote object
  return randomQuote;
}
getRandomQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
