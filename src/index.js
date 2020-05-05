'use strict'

const fibonacci = () => {
    let fibo = []
    let element = 0
    for (let index = 0; ;index++) {
        if (index < 2) {
            fibo.push(index)
            continue
        }

        element = fibo[index-1] + fibo[index-2];

        if (element >= 350) {
            break
        }

        fibo.push(element)
    }
    return (fibo);
}
console.log(fibonacci())

const isFibonnaci = (num) => {
    const arrayFibo = fibonacci();
    const result = arrayFibo.includes(num)

    return result;
}
console.log(isFibonnaci(325));


module.exports = {
    fibonacci,
    isFibonnaci
}
