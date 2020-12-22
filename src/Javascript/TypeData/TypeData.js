// the value is undefined
const iniTypeDataUndefined = undefined;

let typeDataUndefined; // === const e = undefined;

// no value
const typeDataNull = null;

const typeDataNumber = 245;

const typeDataString = 'copas aja dulu';
const typeDataStringPetikDua = "copas aja dulu";
const hari = "jum'at";
const escapeCharacter = 'jum\'at, "dont repeat yourself"'
const stringLiteral = `jum'at, "dont repeat yourself", ${typeDataString}`

console.log(stringLiteral, escapeCharacter);

const typeDataBoolean = true || false;

const typeDataArray = ["audywp", 18, false];
console.log(typeDataString[0]); // String juga Array
console.log(typeDataArray[0]);
console.log(typeDataArray[3]);

const typeDataObject = { nama : "audy", umur : 18, statusMenikah : false};
console.log(typeDataObject.umur);