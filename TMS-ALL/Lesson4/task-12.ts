function getInt(a: number, b: number) {
    return Math.floor(Math.random() * (b + a)) - a;
}

console.log(getInt(3, 34));