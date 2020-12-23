// Challenge Sort with Looping
const sortNum = function () {
    let data = [8, 2, 4, 5, 1, 7];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < i; j++) {
            if (data[i] < data[j]) {
                let x = data[i];
                data[i] = data[j];
                data[j] = x;
            }
        }
    }
    console.log(data);
}

sortNum();