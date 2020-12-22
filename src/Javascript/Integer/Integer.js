let angkaPertama = 17
let angkaKedua = 26

// addition
console.log(angkaPertama + angkaKedua);

// substraction
console.log(angkaPertama - 4 * angkaKedua);

// multiplication
let angkaKetiga = 33;
console.log(angkaPertama * angkaKetiga - (angkaKedua * angkaKetiga + angkaPertama));

// division
let angkaKeempat = -81;
let angkaKelima = 3;
console.log((angkaPertama / angkaKetiga - angkaKedua) * (angkaKetiga + angkaKeempat - angkaKelima));

// exponential
const hasilPangkat = 2 ** 3;
console.log(hasilPangkat);

// Modulus
const hasilModulus = 8 % 3;
console.log(hasilModulus);

const angkaUser = prompt('Masukkan angka : ');

function ModulusTraining() {
    if (angkaUser % 2 === 0) {
        console.log('genap');
    } else {
        console.log('ganjil');
    }
}

ModulusTraining();

// Increment
let incrementNumber = 0;
incrementNumber++; // incrementNumber + 1
console.log(incrementNumber, 'increment');

// Decrement
let decrementNumber = 0;
decrementNumber--; // decrementNumber - 1
console.log(decrementNumber, 'decrement');

// Stringg
let angkaString = '100';
console.log(angkaString + angkaKedua);
console.log(angkaString - angkaKedua);

// assignment
let newNumber = 10;
newNumber += 5;
console.log(newNumber);

// comparison
let comparison = '10';
const comparisonNumber = comparison == newNumber;
console.log(comparisonNumber);

const comparisonNumber3 = comparison === newNumber;
console.log(comparisonNumber3);

// operator
const ternaryOperator = newNumber < 20 ? 'betul' : 'salah';
console.log(ternaryOperator, "Ternary Operator")