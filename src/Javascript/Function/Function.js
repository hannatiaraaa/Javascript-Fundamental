console.log('hello function');

// condition
let angkaGanjil = 1;
let angkaGenap = 2;

// function Ganjil Genap
let inputUser = prompt('Masukkan angka anda : ');
// console.log(inputUser);

function GanjilGenap(angka) {
    if (angka % 2 === 0) {
        console.log("genap");
    } else {
        console.log("ganjil");
    }
}

GanjilGenap(inputUser);

// parameter = the value(s) which be sent from outside function to manage by that function

function Login(username, password) {
    console.log(username, password);
}
Login('admin', 'pass');
Login('admin', 'pass', 'key'); // ini ga terjadi apa2 walau ada parameter tambahan

function LoginKey(username, password, key) {
    console.log(username, password, key);
}
LoginKey('admin', 'pass'); // parameter ke3 undefined
LoginKey({username: 'admin', password: 'pass'}); // cuma passing 1 parameter pertama, yg lain undefined

function LoginObject(key1, key2, key3) {
    console.log(key1.username, key1.password, '======', key2, `angka favoritku ${key3[3]}`);
}
LoginObject({username: 'admin', password: 'pass'}, 'password', ['36', '24', '20', '26']);


// anonymous function
let data = ['a', 'b', 'c', 'd', 'e']

data.map(function (value, index) {
    console.log(value, index, 'from anonymous function');
})

function CallbackTraining(value, func) {
    setTimeout(() => {
        console.log(value);
    }, 1000);
    func();
}

CallbackTraining('nama anda', function () {
    console.log('ini callback');
})
// declaration function
function namaFungsi() {
    console.log('declaration function');
}

namaFungsi();

// arrow functions
const arrowFunction = () => {
    console.log('arrow function');
}

arrowFunction();

const arrowFunction1 = nama => {
    console.log(nama);
}

arrowFunction1('aku');

const arrowFunction2 = nama => console.log(nama);

arrowFunction2('tanpa kurung kurawal');

const arrowFunction3 = (nama, val) => {
    console.log(nama, val);
}
arrowFunction3('2', 'variabel');

const someAction = angka => angka % 2 ? console.log("ganjil") : console.log("genap");

someAction(inputUser);

// combination declaration and anonymous function

const funcToSortNum = function () {
    let data = [8, 2, 4, 5, 1, 7];
    data.sort((value, comparison) => value - comparison);
    console.log(data);
}

funcToSortNum();