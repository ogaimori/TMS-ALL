//#### Task 2 🖥

//Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

interface newPerson{
    firstName?: string,
    lastName?: string,
    age?: number
};

const newPerson = {
    firstName: "Yehor",
    lastName:"Poprozhuk",
    age: 27,
};
console.log(newPerson)
if ("firstName" in newPerson){
    console.log(true)
} else {
    console.log(false)
}

