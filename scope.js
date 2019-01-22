// Scope

// GLOBAL SCOPE : VARIABLES DECLARED OUTSIDE OF BLOCKS 
// ACCESSABLE EVERYWHERE

let color = 'blue'; 

const logSkyColor = () => {
  
  console.log(color); // blue 

};

// BLOCK SCOPE - VARIABLE ASSIGNED WITHIN
// THE BLOCK OF THE FUNCTION ONLY ACCESSABLE THERE.


const logSkyColor = () => {

let color = 'blue'; 
  
  console.log(color); // blue 

};

// ITS BEST PRACTICE TO DECLARE VARIABLES WITH BLOCK SCOPE EG
:

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

console.log(color); // ReferenceError

-----------------------------------------------------------
