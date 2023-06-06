const numbers = [7, -4, 32, -90, 54, 32, -21]

const numbers2: number[] = numbers.filter((value: number) => {
    if (value>0){
        return true
    } else {
        return false
    }
})
console.log(numbers2);
