//--- ARRAY DESTRUCTURING [PART 1] ---------------------//

/** GIVEN(S) **/
var given1 = ['A', 'B', 'C', 'D', 'E', 'F'];
var given2 = ['1', '2', '3', '4', '5', '6'];

//-----------------------------------------------------//

/** BASIC DECONTRUCTING **/
/* OLD METHOD */ 
var oldX = given1[0];
var oldY = given1[1];
var oldZ = given1[2];

/* CONSOLE OUTPUT */
console.log('old:', oldX, oldY, oldZ);

//-----------------------------------------------------//

/* NEW METHOD */
let [ x, y, z ] = given1;

/* NEW METHOD (RENAME) */
let [ xx = x, yy = y, zz = z ] = given1;

/* CONSOLE OUTPUT */
console.log('x y z:', x, y, z);
console.log('xx yy zz:', xx, yy, zz);

//-----------------------------------------------------//

/** SKIPPING AN ELEMENT **/
/* SKIP */
let [ xxx, , zzz ] = given1;

/* CONSOLE OUTPUT */
console.log('xxx zzz:', xxx, zzz);

//-----------------------------------------------------//

/** CREATING A NEW ARRAY **/
/* CREATING A NEW ARRAY */
let [ ...rest1 ] = given1;

/* CONSOLE OUTPUT */
console.log('rest1:', rest1);

//-----------------------------------------------------//

/** SKIP AN ELEMENT + CREATE A NEW ARRAY **/
/* SKIP AN ELEMENT + CREATE A NEW ARRAY */
let [ xxxx, , zzzz, ...rest2 ] = given1;

/* CONSOLE OUTPUT */
console.log('xxxx yyyy zzzz rest2:', xxxx, zzzz, rest2);

//-----------------------------------------------------//

/** COMBINING **/
/* OLD COMBINING */
var combined1 = given1.concat(given2);

/* NEW COMBINING */
var combined2 = [...given1, ...given2];

/* CONSOLE OUTPUT */
console.log('combined1:', combined1);
console.log('combined2:', combined2);

//-----------------------------------------------------//






//--- ARRAY DESTRUCTURING [PART 2] ---------------------//

/** GIVEN(S) **/
const f = (a, b) => {
	console.log('f function called');
	return [a + b, a * b];
}

const ff = (a, b) => {
	console.log('ff function called');
	return [a + b, a * b, a / b];
}

//-----------------------------------------------------//

/** OLD METHOD **/
/* [CALL] OLD */
let array1 = f(2, 3);

/* CONSOLE OUTPUT */
console.log('array:', array1);

//-----------------------------------------------------//

/** NEW METHOD WITH DESTRUCTURING **/
/* [CALL] NEW */
const [ add1, mult1 ] = f(2, 3);

/* CONSOLE OUTPUT */
console.log('add1 mult1:', add1, mult1);

//-----------------------------------------------------//

/** DEFAULTS IN ARRAY WITHIN FUNCTIONS **/
/* [CALL] (No division) */
let [ add2, mult2, div2 = 'No division returned' ] = f(2, 3);

/* [CALL] (With division) */
let [ add3, mult3, div3 = 'No division returned' ] = ff(2, 3);

/* CONSOLE OUTPUT */
console.log('add2 mult2 div2:', add2, mult2, div2);
console.log('add3 mult3 div3:', add3, mult3, div3);
// NOTE: the first call returns 'No division returned
// the seconds one deos return a number because the 
// function does return a value that overrides the 
// default that is set here ^