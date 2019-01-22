// a basic promise

PROMISES ARE GREAT FOR ASYCRONESS CODE
-----------------------------------------

const promise = new Promise((resolve, reject) => {
if (true) {

resolve('Stuff Worked');
} {else

reject('It Broke');
}

})

promise.then(result => console.log(result));

// as we just set the if to true, the out put is, "Stuff Worked"
  
-----------------------------------

const promise = new Promise((resolve, reject) => {
if (true) {

resolve('Stuff Worked');
} {else

reject('It Broke');
}

})

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('Errorrr!'))
	// catch() will catch any errors within the promise
	.then(result3 =>{
		console.log(result3 + '!')
	})
// output = Stuff Worked!?!

------------------------------------------------
	 
const promise1 = new Promise((resolve, reject) => {
if (true) {

resolve('Stuff Worked');
} {else

reject('It Broke');
}

})
		

const promise2 = new Promise((resolve, reject) => {

	setTimeout(resolve, 100, 'Heeelllooo')
}) 

const promise3 = new Promise((resolve, reject) => {

	setTimeout(resolve, 1000, 'Yoooooo')
}) 


const promise4 = new Promise((resolve, reject) => {

	setTimeout(resolve, 3000, 'is it me you are looking for?')
}) 


Promise.all([promise1, promise2, promise3, promise4])
.then(value =>{

	console.log(values);
})

// out put is each of strings that we resolved, in order, with a delay per millisecond eg: 3000
// however, they output at the sametime, they wait until they 
// are all resolved before printing to the console.


-----------------------------------------------------

REAL WORLD EXAMPLE:
// an array of links to APIs that provide us with 3 types of data
const urls = [

'https///jsonplaceholder.typicode.com/users',
'https///jsonplaceholder.typicode.com/posts',
'https///jsonplaceholder.typicode.com/albums',

]
// we map through the urls array above
Promise.all(urls.map(url =>{
// using fetch(), we grab the data from the array
// and using .json, get the info back in a readable format
return.fetch(url).then(resp => resp.json())
// .then, we console log, index 0,1,2 if the array
})).then (result => {
console.log(results[0])
console.log(results[1])
console.log(results[2])
})

-----------------

ES8 BRINGS - ASYNC AWAIT

A CLEANER EASIER TO READ VERSION OF CODE, THAT HAS THE SAME OUTCOME
PROMISES OF DATA, THAT AWAIT RESPONSE/FAIL BEFORE PRODUCING AN OUTCOME

EG:

async function fetchUsers() {

	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json();
	console.log(data);	

}

EG2:


const urls3 = [

'https//jsonplaceholder.typicode.com/users',
'https//jsonplaceholder.typicode.com/posts',
'https//jsonplaceholder.typicode.com/albums',

]

const getData2 = async function(){

	try{

	const [users, posts, albums] = await Promise.all(urls3.map(url =>

		fetch(url).then(resp => resp.json())

))
console.log('users', users)
console.log('posts', posts)
console.log('albums', albums)
} catch(err) {
	console.log('error')
}
}

// try and catch come together, Try will attempt to run all the code, and then Catch will show errors
