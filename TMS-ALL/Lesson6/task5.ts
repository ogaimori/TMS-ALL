/*
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную*/
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    george: 664,
    alexandra: 199
}

let sumSalary = 0;
let count = 0;
for (const sum in salaries){
    count++
    sumSalary+=salaries[sum];
}
console.log(sumSalary)