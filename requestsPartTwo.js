PLEASE SEE THIS CHEAT SHEET FILE TOO = requests - related helperFunctions

REQUESTS PART 2

To make asynchronous event handling easier, promises were introduced in JavaScript in ES6:

A promise is an object that handles asynchronous data. A promise has three states:

pending : when a promise is created or waiting for data.
fulfilled : the asynchronous operation was handled successfully.
rejected : the asynchronous operation was unsuccessful.

--------------------------------------------

fetch() GET Requests I

Creates a request object, that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

BOILER PLATE EG:

//This first argument determines the endpoint of the request.

fetch('https://api-to-call.com/endpoint').then(response => {
  //.then() will fire only after the promise status of fetch() has been resolved.
  if (response.ok) {
    return response.json();
 //The reason we're testing the ok property of the response object is that it will be a Boolean value.
 //If there were no errors response.ok will be true and then your code will return response.json().
  }
  throw new Error('Request failed!');
  //Your code will throw this error when response.ok is falsy.
}, 
 networkError => {
  console.log(networkError.message);
  //If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.
}).then(jsonResponse => {
  return jsonResponse;
});

//The second .then()'s success callback won’t run until the previous .then() method has finished running. It will also not run if there was an error was thrown previously.

-----------

EG2 
//use that code and manipulate it to access the Datamuse API and render information in the browser.

// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = '?sl=';
//queryParams will be the start of your query string and will narrow your search to words that sounds like your word.


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  //You'll need wordQuery to store the value of what is being typed into the input field.
	const endpoint = url + queryParams + wordQuery;
  fetch(endpoint).then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
  },
    networkError => {
  console.log(networkError.message)}                   
                      
   ).then(jsonResponse =>{
   
  renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

------------------------------------------

fetch(POST);

BOILERPLATE OF POST BELOW

//We’re calling fetch() and providing an endpoint. eg: the url
//The second argument of fetch() ie, the object {} determines that this request is a POST request and what information will be sent to the API.
fetch("https://api-to-call.com/endpoint",{
  method: "POST",
  body: JSON.stringify({id: '200'})
}).then(response => {
  if (response.ok){
    return response.json();
  }
 throw new Error('Request failed!'); 
}, 
 networkError => {
  console.log(networkError.message);
}
       
       ).then(jsonResponse =>{
  
  return response.json();
});

--------------------------------------------------

BELOW IS updated boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API.

// Information to reach API
const apiKey = 'ad225c0b60ac4f5c8dc5811c13571562';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({
    destination: urlToShorten
      });
  fetch(url,{
    method: "POST",
    headers: {
     "Content-type": "application/json",
     "apikey" : apiKey
    				 },
    body : data
    
  				}).then(response=>{
    if(response.ok){
      return response.json();
      
    }
     throw new Error('Request failed!'); 
  },
  networkError => {
  console.log(networkError.message);
}).then(jsonResponse =>{
    
    renderResponse(jsonResponse);
    
  })
					}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

					}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


--------------------------------------------

async GET Requests

//Here are some key points to keep in mind as we walk through the code:

//Using an async function that will return a promise.
//await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
//In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.

// BOILERPLATE EXAMPLE BELOW:

const getData = async () => {
  try{
    
    const response = await fetch("https://api-to-call.com/endpoint")
    if (response.ok){
      return true;
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!'); 
    
  }
  catch (error) {
    console.log(error);
    
  }
};

-----------------

//Below, we build on previously created boilerplate code to get nouns that describe the inputted word from the Datamuse API:


// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  
  try {
    const response = await fetch(endpoint)
    if(response.ok){
      const jsonResponse = await response.json()
     renderResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
    
  }
}




// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


-----------------------------------------


async POST Requests

//As with the other GET and POST requests that you’ve been making, an async POST request requires more information.
//We still have the same structure of using try and catch as before. But, in the fetch() call, 
//we now have to include an additional argument that contains more information like method and body.

BOILERPLATE	

const getData = async () => {
  
  try{
    
    const response = await fetch("https://api-to-call.com/endpoint",{
      method : "POST",
      body:	JSON.stringify({id: 200})
      
    })
     if(response.ok){
       const jsonResponse = await response.json()
       return jsonResponse; 
       //we're practicing writing code. Normally, we would want to do more beyond this step of returning jsonResponse.
     }   
    throw new Error ("Request failed!");
    }
  catch (error){
    
    console.log(error);
  }
}


-------


async POST Requests

//The next step is to incorporate that experience and logic into making a real request.
//In this exercise, you'll need to retrieve your Rebrandly API key to access the Rebrandly API.

// information to reach API
const apiKey = 'ad225c0b60ac4f5c8dc5811c13571562';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
   const urlToShorten = inputField.value;
   const data = JSON.stringify(
     {
       destination: urlToShorten
     })
   try {
     const response = await fetch(url, {
       method: "POST",
       body: data,
       headers: { 'Content-type': 'application/json', 'apikey': apiKey }
       
     })
     if (response.ok){
       const jsonResponse = await response.json()
       renderResponse(jsonResponse);
     }
   }
  catch (error){
    console.log(error);
  }
  }

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
