//Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:
//> ['member 1: Darya', 'member 2: Masha', ... etc]
//Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.


const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const users2 = users.map((value: string, index: number) => console.log(`member ${index + 1}: ${value}`));
