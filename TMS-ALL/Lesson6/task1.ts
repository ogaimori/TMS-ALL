//#### Task 1 💻

//Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

interface person{
    firstName?: string,
    lastName?: string,
    age?: number
};

const person = {
    firstName: "Yehor",
    lastName:"Poprozhuk",
    age: 27,
};
console.log(person)
delete person.lastName;
console.log(person)

