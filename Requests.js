// REQUESTS

Have you ever wondered what happens after you click a "Submit" button on a web page?
For instance, if you are submitting information, where does the information go? How is the information processed? 
The answer to the previous questions revolves around HTTP requests.
There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE. 

// In the lesson, we'll cover GET and POST requests. 
// If you want to learn more about the different HTTP requests, we recommend the following documentation - Mozilla Developer Network: HTTP methods


elevent loops - set timeout:

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

EVEN WITH THE TIMER SET TO ZERO THE ITEM WITH setTimeout() runs last.

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

-----------------------------------------------

JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript's asynchronous capabilities.

There are many HTTP request methods, two of which are GET and POST.

1.	GET requests only request information from other sources.

2.	POST methods can introduce new information to other sources in addition to requesting it.

3.	GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

4.	POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

5.	Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

To add a query string to a URL endpoint you can use ? and include a parameter.

To provide additional parameters, use & and then include a key-value pair, joined by =.

//Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.

----------------
XHR GET Requests 

Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. 
Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.

Remember, we use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an XHR GET request.

EG:

NOTE - JSON is JavaScript Object Notation, which is how the response is going to be formatted.

const xhr = new XMLHttpRequest;
const url = "https://api-to-call.com/endpoint";

xhr.responseType = "json";

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
// The purpose of this conditional statement checks to see if the request has finished
    return xhr.response;
}
};

xhr.open("GET", url);
//.open() creates a new request and the arguments passed in determine the type and URL of the request.

xhr.send();

// 	ABOVE IS -  the boilerplate code for an AJAX GET request using an XMLHttpRequest object.

EG:
USING AN API THAT COMPARES WORDS THAT RHYME:

// Information to reach API
 const url = "https://api.datamuse.com/words?";
const queryParams = 'rel_rhy=';


// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  
  const wordQuery = inputField.value;
//inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () =>{
   if (xhr.readyState === XMLHttpRequest.DONE) { renderRawResponse(xhr.response) } 
  }
  xhr.open("GET",endpoint);
  //This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

------------
USING
renderResponse(xhr.response)
INSTEAD OF 
renderRawResponse(xhr.response)

formats the response cleaner.

-----------------------------------------

XHR POST Requests

// The major difference between a GET request and POST request,
// is that a POST request requires additional information to be sent through the request. 
// This additional information is sent in the body of the post request.


BELOW IS A boilerplate code for an AJAX POST request using an XMLHttpRequest object.

const xhr = new XMLHttpRequest;
//The XMLHttpRequest object is used in JavaScript to interact with servers.
const url = `https://api-to-call.com/endpoint`;
//The URL will direct the request to the correct server.

const data = JSON.stringify({id: '200'});
//JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.

xhr.responseType = "json";

//BELOW - .onreadystatechange will contain the event handler that will be called when xhr's state changes
xhr.onreadystatechange = () =>{
  if( xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
    //The response property will contain the data that we're getting back from the POST request. eg when request is done, return the response
  }
  
}

xhr.open("POST", url);
//.open() creates a new request and the arguments passed in determine what type of request is being made and where it's being made to.
xhr.send(data);
// .send() will send the request to the server.

--------------------------------------------------------

EG OF POST
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
  const data = JSON.stringify({destination: urlToShorten});

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
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
