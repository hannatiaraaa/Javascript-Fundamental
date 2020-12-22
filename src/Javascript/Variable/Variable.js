// declare variable globally and its values can be changed (left out since ES6)
var a = 'programmer copas';
function CheckVariableVar() {
    var a = 'sudah diubah';
    var a = 'ubah lagi'
    console.log(a);
}
console.log(a);
CheckVariableVar();

// declare variable using blocking system (i.e. locally) and its values can be changed
let b = 'umur 18 tahun';

function CheckVariableLet() {
    let b = 'sudah diubah lewat let';
    let b = 'b diubah'
    console.log(b);
}
console.log(b);
CheckVariableLet();

// declare variable using blocking system and its values cannot be changed
const c = 'tidur';

console.log(c);

let Hero;
console.log(Hero);

//console.log(hero);
let hero = 'Iron man';
console.log(hero);