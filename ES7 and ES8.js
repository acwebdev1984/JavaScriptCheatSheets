ES7 and ES8

.includes		

eg:

const pets = ["dog", "cat", "parrott"];

pets.includes("dog");

//output = TRUE

------------

EXPONENTIAL OPERATORS

const squared = (x) => x**2;

squared(5)

// output 5*5 = 25

const cubed = (y) => y**3

cubed(3);

//output 3*3*3 = 27

----------------------------

STRING PADDING 

.padStart();
.padEnd();

"Turtle".padEnd(10);

// change to total of 10 Characters with the additional padding at the end of the string

EG: "Turtle    "

"Turtle".padStart(10);

// Does the same but at the start

"    Turtle"

--------------------------------------- 

object.values
object.entries
object.keys 

ALLOWING US TO EXTRACT DATA FROM OBJECTS, SIMILAR TO HOW
WE DO WITH .map and .filter, WITH ARRAYS.

eg:

const obj = {

	username0: "santa",
	username1: "Rudolf",
	username2: "Mr.Grinch" 
}

object.keys(obj).forEach((key, index) => {
	console.log(key.obj[key]);
})

output
	username0: "santa",
	username1: "Rudolf",
	username2: "Mr.Grinch" 

-------

object.values(obj).forEach(value =>{

	console.log(value);
})

output
	 "santa",
	 "Rudolf",
	 "Mr.Grinch" 

------------


object.entries(obj).forEach(value =>{

	console.log(value);
})

output
	["username0", "santa"]
	["username1", "Rudolf"]
	["username2", "Mr.Grinch"]

	NOTE THAT THIS PRODUCES YOU THE OBJECT KEYS AND VALUES
	IN ARRAYS. NOW ALLOWING YOU TO MANIPULATE THE DATA USING 
	.map, .filter, .reduce ETC.

SO, LETS SAY WE WANT TO EDIT ALL THE USERNAMES, REPLACING THE WORD
"username" WITH THE VALUE, EG "Santa"



object.entries(obj).map(value =>{
// note that using entries, we can then use array functions .map
return value[1] + value[0].replace("username", "");
//we are returning value 1 (santa) + value 0(username), but replacing
//the username with an empty string
})

output	

["santa0", "Rudolf1", "Mr.Grinch2"]

