//--- OBJECT DESTRUCTURING [PART 1] ---------------------//

/** GIVENS **/
var given1 = {x: 'A', y: 'B', z: 'C', alpha: 'alpha'};
var given2 = {x1:'1', y1: '2', z1: '3', x: 'AA'};

//-----------------------------------------------------//

/* OLD METHOD */ 
var oldX = given1.x;
var oldY = given1.y;
var oldZ = given1.z;

//-----------------------------------------------------//

/** BASIC DECONTRUCTING **/
/* NEW METHOD */
let { x, y, z } = given1;

/* NEW METHOD (RENAME 1) */
let { xx = x, yy = y, zz = z } = given1;

/* NEW METHOD (RENAME 2) */
let { x: xxx, y: yyy, z: zzz } = given1;

/* CONSOLE OUTPUT */
console.log('Old:', oldX, oldY, oldZ);
console.log('xyz:', x, y, z);
console.log('xxyyzz:', xx, yy, zz);
console.log('xxxyyyzzz:', xxx, yyy, zzz);

//-----------------------------------------------------//

/** DEFAULTS IN DECONSTRUCTING **/
/* DEFAULT VALUE */
const { alpha = 'No alpha exists', beta = 'No beta exists' } = given1;

/* CONSOLE OUTPUT */
console.log('alpha:', alpha, 'beta:', beta);

// NOTE: if there is no value for asked 
// variable then it will default to ^

//-----------------------------------------------------//

/** CREATING A NEW ARRAY **/
/* USE '...' */
let { ...rest } = given1;

/* CONSOLE OUTPUT */
console.log('rest:', rest);

//-----------------------------------------------------//

/** COMBINING AND/OR UPDATING **/
/* COMBINING */
var combined = { ...given1, ...given2 };
// Note: x in given 1 was overrided by x in given 2

/* CONSOLE OUTPUT */
console.log('combined:', combined);

//-----------------------------------------------------//

/* GIVEN */
var given3 = {
	x2: {
		xx2: 'zeta',
		yy2: 'Yeet'
	},
	y2: 'a',
	z2: 'b'
}

/** DESTRUCTURING NESTED OBJECTS **/
/* NEW METHOD */
let { x2: { xx2 }, y2, z2 } = given3;

/* NEW METHOD (RENAME 1) */
let { x2: { xx2: xxxx }, y2: yyyy, z2: zzzz } = given3;

/* NEW METHOD (RENAME 2) */
let { x2: { xxxxx = xx2 }, yyyyy = y2, zzzzz = z2 } = given3;

/* CONSOLE OUTPUT */
console.log('xx2 y2 z2:', xx2, y2, z2);
console.log('xxxx yyyy zzzz:', xxxx, yyyy, zzzz);
console.log('xxxxx yyyyy zzzzz:', xxxxx, yyyyy, zzzzz);

//-----------------------------------------------------//






//--- OBJECT DESTRUCTURING [PART 2] ---------------------//
/** GIVEN(S) **/
person1 = {
	name: 'al',
	age: 23,
	gender: 'male'
};

person2 = {
	name: 'melissa',
	age: 22,
	gender: 'female',
	hobby: 'breaking hearts'
};

/* FUNCTIONS */
const fff = (person) => {
	let phrase1 =  `The name is ${person.name} and the age is ${person.age}.`;
	return phrase1;
}

const ffff = ({ name, age, hobby = 'Not passed' }) => {
	let phrase2 =  `The name is ${name} and the age is ${age}. hobby: ${hobby}`;
	return phrase2;
}

//-----------------------------------------------------//

/** OLD METHOD **/
let returnedPhrase1 = fff(person1);

/** CONSOLE OUTPUT **/
console.log('returnedPhrase1:', returnedPhrase1);

//-----------------------------------------------------//

/** NEW METHOD **/
let returnedPhrase2 = ffff(person1);
let returnedPhrase3 = ffff(person2);

/** CONSOLE OUTPUT **/
console.log('returnedPhrase2:', returnedPhrase2);
console.log('returnedPhrase3:', returnedPhrase3);
//NOTE: the default is set when a hobby is not
// passed to the function