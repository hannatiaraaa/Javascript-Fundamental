console.log('hello array')

let data = ['a', 'b', 'c', 'd', 'e'];

console.log("apakah nama anda", data[3], "?");

const data1 = [
    {
        nama: "safitri",
        gender: "wanita",
    },
    {
        nama: "han",
        gender: "pria",
    },
    {
        nama: "valin",
        gender: "wanita",
    },
    [
        {
            nama: "sofyan",
            gender: "pria",
        },
        {
            nama: "zzz",
            gender: "unknown",
        }
    ]
]

console.log(data1[1].nama);
console.log(data1[data1.length-1][0].gender);