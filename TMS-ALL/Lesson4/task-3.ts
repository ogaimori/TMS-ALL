let string: string = "new strange sting";

function someFunction(a: number) {
    if (a > string.length) {
        console.log("Вы вышли за границу строки");
    } else{
        console.log("Вы в границах строки");
    }
}

someFunction(2);