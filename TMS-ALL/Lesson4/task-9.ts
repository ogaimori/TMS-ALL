let num1: number = 5.666666;

function checkIfInt(a: number) {
    if (Number.isInteger(a)) {
        console.log(a);
    }
    else {
        Math.round(a);
    }
}
checkIfInt(num1);