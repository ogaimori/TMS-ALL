//Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.
const cats = ['Gachito', 'Tom', 'Batman']

for (const cat in cats){
    console.log(cats[cat])
}

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for(let name of cats){
    console.log(name);
}