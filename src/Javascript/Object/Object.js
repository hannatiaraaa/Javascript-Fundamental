console.log('hello object');

const data = {
    nilai : [50, 60, 70, 80],
    status : "lulus",
    nama : "John",
}

console.log(data.nilai[0], data.nilai[1], data.nilai[2], data.nilai[3]);

console.log(...data.nilai, data.status, data.nama);